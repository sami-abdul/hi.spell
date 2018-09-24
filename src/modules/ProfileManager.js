import {
    loadUserData,
    Person,
} from 'blockstack/lib';

export const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export var profile = {
    name() {
        return 'Anonymous';
    },
    avatarUrl() {
        return avatarFallbackImage;
    }
}

export const updateProfile = () => {
    profile = new Person(loadUserData().profile)
    return profile
}