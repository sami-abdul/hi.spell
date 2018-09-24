import {
    loadUserData,
    Person,
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export var person = {
    name() {
        return 'Anonymous';
    },
    avatarUrl() {
        return avatarFallbackImage;
    }
}

export default class ProfileManager {

    updatePersonData() {
        person = new Person(loadUserData().profile)
        return person
    }
}