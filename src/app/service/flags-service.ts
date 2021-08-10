import { Injectable } from '@angular/core';
import { UserRepository } from '../repository/user-repository';
import bulletTrain from 'bullet-train-client';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root',
})
export class FlagsService{

    flags: any[];

    constructor(userRepository: UserRepository){
        let user: User = userRepository.load();

        bulletTrain.identify(user.id)

        bulletTrain.init({
            environmentID: "KujiopFpqzMpdv5bQFYA8X",
            onChange: () => {
                this.flags = bulletTrain.getAllFlags();
            },
            disableCache: true
        });

        bulletTrain.getFlags();
    }

    isFeatureEnabled(featureName: string, fallback: boolean) : boolean{        
        if(this.flags)
            return this.flags[featureName].enabled;

        return fallback;
    }
}
