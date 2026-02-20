import { ConfigService } from '../services/config.service';
import { firstValueFrom } from 'rxjs';

export function initializeApp(configService: ConfigService) {
    return (): Promise<void> => {
        return firstValueFrom(configService.loadConfig())
            .then(() => {})
            .catch(error => {
                console.error('Error al cargar la configuración', error);
            });
    }
}