import { atom } from "recoil"; 

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 1
});


export const messagingAtom = atom({
    key: "messagingAtom",  
    default: 14
});