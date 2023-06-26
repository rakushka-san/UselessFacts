import { ApiService } from './api.service';
import { Utils } from './utils';
import { print } from './print';

class App {
    private static blinkInterval: NodeJS.Timer;
    private static quote: Element = document.querySelector('#quote');
    private static cursor: Element = document.querySelector('#cursor');
    private static audioPaths: Array<string> = [];
    private static audioNum: number = 5;
    
    public static init(): void {
        App.quote.addEventListener('click', App.setQuote);
        App.setQuote();

        for (let index = 0; index < App.audioNum; index++) {
            App.audioPaths.push(`audio/key${index}.mp3`);            
        }

        console.log(App.audioPaths);
    }

    private static setQuote(): void {
        ApiService.getFact().then(text => {
            App.quote.innerHTML = '';
            App.quote.removeEventListener('click', App.setQuote);

            clearInterval(App.blinkInterval);
            App.cursor.classList.remove('hidden');

            print(App.quote, text, 60, () => {
                const audioPath = Utils.arrayRandElement(App.audioPaths);
                const keySound = new Audio(audioPath);
                keySound.play();
            }, () => {
                App.blinkInterval = setInterval(() => {
                    if (App.cursor.classList.contains('hidden')) {
                        App.cursor.classList.remove('hidden');
                    } else {
                        App.cursor.classList.add('hidden');
                    }
                }, 500);
                App.quote.addEventListener('click', App.setQuote);
            });             
        });
    }
}

document.addEventListener('DOMContentLoaded', App.init);