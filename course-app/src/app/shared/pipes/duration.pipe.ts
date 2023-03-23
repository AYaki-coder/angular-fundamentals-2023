import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    public transform(minutes: number): string {
        let hours = Math.floor(minutes / 60).toString();
        hours = hours.length === 1 ? 0 + hours : hours;
        let min = (minutes % 60).toString();
        min = min.length === 1 ? 0 + min : min;

        return `${hours}:${min}`;
    }
}
