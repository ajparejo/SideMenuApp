export const sideMenu = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profiles",
        to: "/profiles",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Locations",
                        to: "/locations",
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "/account",
            },
            {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Sign up",
                        to: "/signup",
                    },
                ],
            },
        ],
    },
];

export default sideMenu;