import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {
  transform(value : Date | moment.Moment | string | number, ...args: any[]) : string {
    if (!value) {
      return '';
    }

    return moment(value).format(args[0]);
  }
}