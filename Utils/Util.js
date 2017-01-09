
export function getWelcomeString(userName) {
    if (userName) {
        return ("Welcome "+userName+'! Enjoy all features of application.')
    }
    else {
        return "Welcome, Guest! Please Sign-in to use all features of this application."
    }
};