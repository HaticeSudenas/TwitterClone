import store from "../store"


export const mainMenu = [
    {
        path: "/",
        title: "Anasayfa",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 21.591 7.146 L 12.52 1.157 c -0.316 -0.21 -0.724 -0.21 -1.04 0 l -9.071 5.99 c -0.26 0.173 -0.409 0.456 -0.409 0.757 v 13.183 c 0 0.502 0.418 0.913 0.929 0.913 H 9.14 c 0.51 0 0.929 -0.41 0.929 -0.913 v -7.075 h 3.909 v 7.075 c 0 0.502 0.417 0.913 0.928 0.913 h 6.165 c 0.511 0 0.929 -0.41 0.929 -0.913 V 7.904 c 0 -0.301 -0.158 -0.584 -0.408 -0.758 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 21.591 7.146 L 12.52 1.157 c -0.316 -0.21 -0.724 -0.21 -1.04 0 l -9.071 5.99 c -0.26 0.173 -0.409 0.456 -0.409 0.757 v 13.183 c 0 0.502 0.418 0.913 0.929 0.913 h 6.638 c 0.511 0 0.929 -0.41 0.929 -0.913 v -7.075 h 3.008 v 7.075 c 0 0.502 0.418 0.913 0.929 0.913 h 6.639 c 0.51 0 0.928 -0.41 0.928 -0.913 V 7.904 c 0 -0.301 -0.158 -0.584 -0.408 -0.758 Z M 20 20 l -4.5 0.01 l 0.011 -7.097 c 0 -0.502 -0.418 -0.913 -0.928 -0.913 H 9.44 c -0.511 0 -0.929 0.41 -0.929 0.913 L 8.5 20 H 4 V 8.773 l 8.011 -5.342 L 20 8.764 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/explore",
        title: "Keşfet",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 10.25 4.25 c -3.314 0 -6 2.686 -6 6 s 2.686 6 6 6 c 1.657 0 3.155 -0.67 4.243 -1.757 c 1.087 -1.088 1.757 -2.586 1.757 -4.243 c 0 -3.314 -2.686 -6 -6 -6 Z m -9 6 c 0 -4.971 4.029 -9 9 -9 s 9 4.029 9 9 c 0 1.943 -0.617 3.744 -1.664 5.215 l 4.475 4.474 l -2.122 2.122 l -4.474 -4.475 c -1.471 1.047 -3.272 1.664 -5.215 1.664 c -4.971 0 -9 -4.029 -9 -9 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/notifications",
        title: "Bildirimler",
        notification: 4,
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 11.996 2 c -4.062 0 -7.49 3.021 -7.999 7.051 L 2.866 18 H 7.1 c 0.463 2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 -4 h 4.236 l -1.143 -8.958 C 19.48 5.017 16.054 2 11.996 2 Z M 9.171 18 h 5.658 c -0.412 1.165 -1.523 2 -2.829 2 s -2.417 -0.835 -2.829 -2 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 19.993 9.042 C 19.48 5.017 16.054 2 11.996 2 s -7.49 3.021 -7.999 7.051 L 2.866 18 H 7.1 c 0.463 2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 -4 h 4.236 l -1.143 -8.958 Z M 12 20 c -1.306 0 -2.417 -0.835 -2.829 -2 h 5.658 c -0.412 1.165 -1.523 2 -2.829 2 Z m -6.866 -4 l 0.847 -6.698 C 6.364 6.272 8.941 4 11.996 4 s 5.627 2.268 6.013 5.295 L 18.864 16 H 5.134 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/messages",
        title: "Mesajlar",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 1.998 4.499 c 0 -0.828 0.671 -1.499 1.5 -1.499 h 17 c 0.828 0 1.5 0.671 1.5 1.499 v 2.858 l -10 4.545 l -10 -4.547 V 4.499 Z m 0 5.053 V 19.5 c 0 0.828 0.671 1.5 1.5 1.5 h 17 c 0.828 0 1.5 -0.672 1.5 -1.5 V 9.554 l -10 4.545 l -10 -4.547 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 1.998 5.5 c 0 -1.381 1.119 -2.5 2.5 -2.5 h 15 c 1.381 0 2.5 1.119 2.5 2.5 v 13 c 0 1.381 -1.119 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.119 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.276 0 -0.5 0.224 -0.5 0.5 v 2.764 l 8 3.638 l 8 -3.636 V 5.5 c 0 -0.276 -0.224 -0.5 -0.5 -0.5 h -15 Z m 15.5 5.463 l -8 3.636 l -8 -3.638 V 18.5 c 0 0.276 0.224 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.224 0.5 -0.5 v -8.037 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/lists",
        title: "Listeler",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 18.5 2 h -13 C 4.12 2 3 3.12 3 4.5 v 15 C 3 20.88 4.12 22 5.5 22 h 13 c 1.38 0 2.5 -1.12 2.5 -2.5 v -15 C 21 3.12 19.88 2 18.5 2 Z M 16 14 H 8 v -2 h 8 v 2 Z m 0 -4 H 8 V 8 h 8 v 2 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 3 4.5 C 3 3.12 4.12 2 5.5 2 h 13 C 19.88 2 21 3.12 21 4.5 v 15 c 0 1.38 -1.12 2.5 -2.5 2.5 h -13 C 4.12 22 3 20.88 3 19.5 v -15 Z M 5.5 4 c -0.28 0 -0.5 0.22 -0.5 0.5 v 15 c 0 0.28 0.22 0.5 0.5 0.5 h 13 c 0.28 0 0.5 -0.22 0.5 -0.5 v -15 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 h -13 Z M 16 10 H 8 V 8 h 8 v 2 Z m -8 2 h 8 v 2 H 8 v -2 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/communities",
        title: "Yer İşaretleri",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 7.471 21 H 0.472 l 0.029 -1.027 c 0.184 -6.618 3.736 -8.977 7 -8.977 c 0.963 0 1.95 0.212 2.87 0.672 c -1.608 1.732 -2.762 4.389 -2.869 8.248 l -0.03 1.083 Z M 9.616 9.27 C 10.452 8.63 11 7.632 11 6.5 C 11 4.57 9.433 3 7.5 3 S 4 4.57 4 6.5 c 0 1.132 0.548 2.13 1.384 2.77 c 0.589 0.451 1.317 0.73 2.116 0.73 s 1.527 -0.279 2.116 -0.73 Z m 6.884 1.726 c -3.264 0 -6.816 2.358 -7 8.977 L 9.471 21 h 14.057 l -0.029 -1.027 c -0.184 -6.618 -3.736 -8.977 -7 -8.977 Z m 2.116 -1.726 C 19.452 8.63 20 7.632 20 6.5 C 20 4.57 18.433 3 16.5 3 S 13 4.57 13 6.5 c 0 1.132 0.548 2.13 1.384 2.77 c 0.589 0.451 1.317 0.73 2.116 0.73 s 1.527 -0.279 2.116 -0.73 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 7.501 19.917 L 7.471 21 H 0.472 l 0.029 -1.027 c 0.184 -6.618 3.736 -8.977 7 -8.977 c 0.963 0 1.95 0.212 2.87 0.672 c -0.444 0.478 -0.851 1.03 -1.212 1.656 c -0.507 -0.204 -1.054 -0.329 -1.658 -0.329 c -2.767 0 -4.57 2.223 -4.938 6.004 H 7.56 c -0.023 0.302 -0.05 0.599 -0.059 0.917 Z m 15.998 0.056 L 23.528 21 H 9.472 l 0.029 -1.027 c 0.184 -6.618 3.736 -8.977 7 -8.977 s 6.816 2.358 7 8.977 Z M 21.437 19 c -0.367 -3.781 -2.17 -6.004 -4.938 -6.004 s -4.57 2.223 -4.938 6.004 h 9.875 Z m -4.938 -9 c -0.799 0 -1.527 -0.279 -2.116 -0.73 c -0.836 -0.64 -1.384 -1.638 -1.384 -2.77 c 0 -1.93 1.567 -3.5 3.5 -3.5 s 3.5 1.57 3.5 3.5 c 0 1.132 -0.548 2.13 -1.384 2.77 c -0.589 0.451 -1.317 0.73 -2.116 0.73 Z m -1.5 -3.5 c 0 0.827 0.673 1.5 1.5 1.5 s 1.5 -0.673 1.5 -1.5 s -0.673 -1.5 -1.5 -1.5 s -1.5 0.673 -1.5 1.5 Z M 7.5 3 C 9.433 3 11 4.57 11 6.5 S 9.433 10 7.5 10 S 4 8.43 4 6.5 S 5.567 3 7.5 3 Z m 0 2 C 6.673 5 6 5.673 6 6.5 S 6.673 8 7.5 8 S 9 7.327 9 6.5 S 8.327 5 7.5 5 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: "/verified-choose",
        title: "Onaylanmış",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z"
                    />
                </svg>
            )
        }
    },
    {
        path: ()=>{
            return `/${store.getState()?.auth?.currentAccount?.username}`
        },
        title: "Profil",
        icon: {
            Active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 17.863 13.44 c 1.477 1.58 2.366 3.8 2.632 6.46 l 0.11 1.1 H 3.395 l 0.11 -1.1 c 0.266 -2.66 1.155 -4.88 2.632 -6.46 C 7.627 11.85 9.648 11 12 11 s 4.373 0.85 5.863 2.44 Z M 12 2 C 9.791 2 8 3.79 8 6 s 1.791 4 4 4 s 4 -1.79 4 -4 s -1.791 -4 -4 -4 Z"
                    />
                </svg>
            ),
            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                    <path
                        fill="currentColor"
                        d="M 5.651 19 h 12.698 c -0.337 -1.8 -1.023 -3.21 -1.945 -4.19 C 15.318 13.65 13.838 13 12 13 s -3.317 0.65 -4.404 1.81 c -0.922 0.98 -1.608 2.39 -1.945 4.19 Z m 0.486 -5.56 C 7.627 11.85 9.648 11 12 11 s 4.373 0.85 5.863 2.44 c 1.477 1.58 2.366 3.8 2.632 6.46 l 0.11 1.1 H 3.395 l 0.11 -1.1 c 0.266 -2.66 1.155 -4.88 2.632 -6.46 Z M 12 4 c -1.105 0 -2 0.9 -2 2 s 0.895 2 2 2 s 2 -0.9 2 -2 s -0.895 -2 -2 -2 Z M 8 6 c 0 -2.21 1.791 -4 4 -4 s 4 1.79 4 4 s -1.791 4 -4 4 s -4 -1.79 -4 -4 Z"
                    />
                </svg>
            )
        }
    }

]

export const topics=[
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"tag",
            value:"Dilan Polat"
        }
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"query",
            value:"StarLink"
        },
        postCount:13663
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"tag",
            value:"Dilan Polat"
        }
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"query",
            value:"StarLink"
        },
        postCount:13663
    },{
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"tag",
            value:"Dilan Polat"
        }
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"query",
            value:"StarLink"
        },
        postCount:13663
    },{
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"tag",
            value:"Dilan Polat"
        }
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"query",
            value:"StarLink"
        },
        postCount:13663
    },{
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"tag",
            value:"Dilan Polat"
        }
    },
    {
        title:"Türkiye tarihinde gündemde",
        topic:{
            type:"query",
            value:"StarLink"
        },
        postCount:13663
    },
    
]

export const colors=[
    "#1d9bf0",
    "#ffd400",
    "#f91880",
    "#7856ff",
    "#ff7a00",
    "#00ba7c"
]
export const fontSize=[
    14,
    15,
    16,
    18,
    19,
]