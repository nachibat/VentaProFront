import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/config.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {

    private readonly CONFIG_KEY = 'app_config';
    private readonly COMFIG_TIMESTANP_KEY = 'app_config_timestamp';
    private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas
    private readonly API_URL = 'http://localhost:3000/api';

    config = signal<AppConfig | null>(null);

    constructor(private http: HttpClient) { }

    loadConfig(): Observable<AppConfig> {
        // Verificar si hay configuración en cache y si es válida
        const cachedConfig = this.getConfigFromCache();
        if (cachedConfig) {
            this.config.set(cachedConfig);
            this.applyConfig(cachedConfig);
            return of(cachedConfig);
        }

        // Si no hay cache o expiró, consultar al servidor
        return this.http.get<AppConfig>(`${this.API_URL}/configuration`).pipe(
            tap(config => {
                this.config.set(config);
                this.saveConfigToCache(config);
                this.applyConfig(config);
            })
        );

    }

    private getConfigFromCache(): AppConfig | null {
        try {
            const config = localStorage.getItem(this.CONFIG_KEY);
            const timestamp = localStorage.getItem(this.COMFIG_TIMESTANP_KEY);

            if (!config || !timestamp) return null;
            
            const now = Date.now();
            const cacheTime = parseInt(timestamp, 10);

            // Verificar si el cache expiró
            if (now - cacheTime > this.CACHE_DURATION) {
                this.clearCache();
                return null;
            }
            return JSON.parse(config) as AppConfig;
        } catch {
            return null;
        }
    }

    private saveConfigToCache(config: AppConfig): void {
        try {
            localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
            localStorage.setItem(this.COMFIG_TIMESTANP_KEY, Date.now().toString());
        } catch (error) {
            console.error('Error al guardar la configuración en cache', error);
        }
    }

    private clearCache(): void {
        localStorage.removeItem(this.CONFIG_KEY);
        localStorage.removeItem(this.COMFIG_TIMESTANP_KEY);
    }

    private applyConfig(config: AppConfig): void {
        // Aplicar colores como variables CSS
        document.documentElement.style.setProperty('--primary-color', config.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', config.secondaryColor);
        
        // Actualizar el título de la aplicación
        document.title = config.titleName;
    }

    // Método para forzar recarga desde el servidor
    refreshConfig(): Observable<AppConfig> {
        this.clearCache();
        return this.loadConfig();
    }

}
