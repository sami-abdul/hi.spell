import {
    loadUserData,
    Person,
} from 'blockstack/lib';

export const AVATAR_FALLBACK_IMAGE = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export var profile = {
    name() {
        return 'Anonymous';
    },
    avatarUrl() {
        return AVATAR_FALLBACK_IMAGE;
    }
}

export const updateProfile = () => {
    profile = new Person(loadUserData().profile)
    return profile
}