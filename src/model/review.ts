export interface Review {
    user: User;
    feedback: string;
}

export interface User {
    firstName: string;
    lastName: string;
    company: string;
    profilePicture: string;
}