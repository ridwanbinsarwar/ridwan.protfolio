module.exports = {
    // enabled: true, // FOR PRODUCTION
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                tab: '746px',
                'pc-sm': '951px',
                pc: '1125px',
                'pc-user-md': '1240px',
                'pc-md': '1366px',
                'pc-lg': '1920px',
            },
            minWidth: {
                32: '8rem',
            },
            width: {
                content: 'fit-content',
                200: '50rem',
                208: '52rem',
                9.5: '38px',
            },
            height: {
                content: 'fit-content',
                15: '3.75rem',
                208: '52rem',
                158: '39.5rem',
                9.5: '38px',
            },
            fontSize: {
                '7xs': '0.55rem',
                '6xs': '0.6rem',
                '5xs': '0.65rem',
                '4xs': '0.675rem',
                '3xs': '0.7rem',
                '2xs': '0.725rem',
            },
            colors: {
                // Configure your color palette here
                gray: {
                    100: '#CCCCCC',
                },
                primary: '#F77062',
                FE5196: '#FE5196',
                portfolio: {
                    home: '#4D4D4D',
                    teach: '#F77062',
                    reach: '#5386E4',
                    manage: '#FE5196',
                    settings: '#4D4D4D',
                },
            },

            inset: {
                '-6.5': '-26px',
            },
            padding: {
                inherit: 'inherit',
            },
            borderRadius: {
                inherit: 'inherit',
                DEFAULT: '5px',
                md: '5px',
                lg: '10px',
            },
            textColor: {
                primary: '#F77062',
                secondary: '#B7B7B9',
                danger: '#e3342f',
                'primary-bold': '#4D4D4D',
            },
            padding: {
                3.75: '15px',
                7.5: '30px',
            },
            margin: {
                7.5: '30px',
                7.25: '29px',
                14.5: '58px',
            },
            backgroundColor: {
                primary: '#F77062',
                gray: {
                    100: '#CCCCCC',
                    F0F0F0: '#F0F0F0',
                },
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
                FE5196: '0px 3px 9px 0px rgba(254, 81, 150, 0.45)',
                outer: '0px 3px 9px 0px rgba(0, 0, 0, 0.05)',
                card: '15px 15px 40px  5px rgba(0, 0, 0, 0.07)',
            },
        },
    },
    plugins: [],
};
