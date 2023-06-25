import { ApiService } from './api.service';
import { print } from './print';

class App {
    private static blinkInterval: NodeJS.Timer;
    
    public static init(): void {
        const quote = document.querySelector('#quote');
        quote.addEventListener('click', App.setQuote);
        App.setQuote();
    }

    private static setQuote(): void {
        ApiService.getFact()
            .then(text => {
                const quote = document.querySelector('#quote');
                const cursor = document.querySelector('#cursor');

                quote.innerHTML = '';
                quote.removeEventListener('click', App.setQuote);

                clearInterval(App.blinkInterval);
                cursor.classList.remove('hidden');

                print(quote, text, 60, () => {
                    App.blinkInterval = setInterval(() => {
                        if (cursor.classList.contains('hidden')) {
                            cursor.classList.remove('hidden');
                        } else {
                            cursor.classList.add('hidden');
                        }
                    }, 500);
                    quote.addEventListener('click', App.setQuote);
                });                
            });
    }
}

document.addEventListener('DOMContentLoaded', App.init);