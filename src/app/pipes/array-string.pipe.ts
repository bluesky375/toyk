import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayString'
})
export class ArrayStringPipe implements PipeTransform {

    transform(value: [], args?: any): any {
        let catString = "";
        let catArry = [];
        if (value == null) {
            return catString;
        }

        value.forEach((element: any) => {
            let name = element.name || '';
            if (element.parent_id == '0') {
                catString += `<span class="black">${name}: </span>`
            } else {
                catArry.push(name);
            }
        });
        return catString+catArry.toString();
        // return catArry.toString();
    }

}
