import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'canFly'
})
export class CanFlyPipe implements PipeTransform{
    
    transform(value: boolean, ):string {
        console.log({value});
        return(value)
        ?'Vuela'
        :'No vuela'
    }

}