import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creationDate' })
export class CreationDatePipe implements PipeTransform {
    public transform(date: Date): string {
        let day = date.getDate().toString();
        day = day.length === 1 ? 0 + day : day;

        let month = (date.getMonth() + 1).toString();
        month = month.length === 1 ? 0 + month : month;
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }
}
