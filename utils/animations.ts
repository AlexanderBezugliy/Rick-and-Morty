import { easeOut } from "framer-motion";

//Header - mobile menu
export const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    transition: {
        duration: 0.5,
        ease: "easeOut",
    },
};
//Header - visible
export const headerUp = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: easeOut },
} 
// AMAIZING PORTAL
export const portal = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, ease: easeOut },
}
//FILTERS
export const filters = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, ease: easeOut },
}
//CARDS
export const cards = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 }, 
    transition: { duration: 0.7, ease: easeOut },
}
//BASKET MODAL
export const basketAnimationWrapper = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: easeOut },
}
export const basketAnimation = {
    initial: { scale: 0.8, opacity: 0, y: -50 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.8, opacity: 0, y: -50 },
    // transition: { duration: 0.6, ease: "easeInOut" },
}