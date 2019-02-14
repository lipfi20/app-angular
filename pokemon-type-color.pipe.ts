import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case '3pts':
        color = 'red lighten-1';
        break;
      case 'scorer':
        color = 'blue lighten-1';
        break;
      case '2way':
        color = 'green lighten-1';
        break;
      case 'dunk':
        color = 'brown lighten-1';
        break;
      case 'big':
        color = 'grey lighten-3';
        break;
      case 'magic':
        color = 'blue lighten-3';
        break;
      case 'goat':
        color = 'deep-purple accent-1';
        break;
      case 'ft':
        color = 'pink lighten-4';
        break;
      case 'clutch':
        color = 'deep-purple darken-2';
        break;
      case 'TD':
        color = 'black';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}