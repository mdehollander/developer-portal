import makerTheme from '@makerdao/dai-ui-theme-maker-neue';
import { icons as standardIcons } from '@makerdao/dai-ui-icons';
import { icons as brandIcons } from '@makerdao/dai-ui-icons-branding';

const icons = {
  ...standardIcons,
  ...brandIcons,
  moon: {
    viewBox: '0 0 17 17',
    path: (
      <path
        d="M9.58993 0.0806936H9.57765H9.55157C9.41734 0.0638186 9.28234 0.0500118 9.14581 0.0392732C8.91569 0.0131937 8.69632 0.000153924 8.48845 0.000153924C7.33264 -0.00682731 6.18772 0.223738 5.1247 0.677548C4.06169 1.13136 3.10325 1.79874 2.30883 2.63829C1.51441 3.47784 0.900956 4.47166 0.506515 5.5581C0.112075 6.64455 -0.0549393 7.80045 0.0158318 8.95411C0.0866028 10.1078 0.39365 11.2346 0.917928 12.2647C1.44221 13.2948 2.17253 14.2062 3.06361 14.9423C3.95469 15.6785 4.98752 16.2237 6.09804 16.5442C7.20855 16.8646 8.37307 16.9535 9.51936 16.8053C9.6045 16.7946 9.68888 16.78 9.77325 16.767C10.0463 16.7245 10.3145 16.6698 10.5779 16.6028C10.6469 16.5852 10.7159 16.5691 10.7842 16.5491C11.4471 16.3616 12.0842 16.0929 12.6811 15.7491C12.7317 15.7207 12.7801 15.6885 12.8299 15.6586C13.0778 15.5094 13.3177 15.3473 13.5486 15.1731C13.6016 15.1332 13.656 15.0964 13.7082 15.0542C13.9775 14.8426 14.2336 14.6149 14.4752 14.3723C14.4844 14.3638 14.4913 14.3546 14.4998 14.3454C14.7255 14.1135 14.9378 13.869 15.1357 13.6129C15.1878 13.5454 15.2377 13.4779 15.2891 13.4089C15.4622 13.1736 15.6227 12.9293 15.77 12.6771C15.7899 12.6433 15.8153 12.6134 15.8344 12.5789C15.839 12.5712 15.8406 12.5628 15.8444 12.5551C16.5194 11.3543 16.8895 10.0061 16.9221 8.62896C16.9547 7.25178 16.6489 5.88763 16.0315 4.65617C15.414 3.42472 14.5039 2.36358 13.3808 1.56585C12.2577 0.768112 10.956 0.25815 9.58993 0.0806936ZM1.58505 8.43764C1.58505 8.20139 1.59732 7.96821 1.62034 7.7381C1.62877 7.66139 1.64488 7.58469 1.65562 7.50798C1.67556 7.35458 1.69397 7.2073 1.72389 7.06003C1.74306 6.96722 1.77068 6.87747 1.79292 6.7862C1.82514 6.6581 1.85275 6.52924 1.89187 6.40267C1.92102 6.30756 1.9586 6.21628 1.99235 6.12347C2.03454 6.00611 2.06906 5.88722 2.12045 5.77293C2.16033 5.67858 2.20789 5.58884 2.25161 5.49603C2.30301 5.38864 2.35056 5.27895 2.40502 5.17463C2.45488 5.08182 2.51164 4.99438 2.5661 4.90387C2.62056 4.81336 2.68193 4.70444 2.74559 4.60856C2.80925 4.51268 2.86985 4.43827 2.93275 4.35313C2.99565 4.26799 3.06545 4.16827 3.13755 4.08006C3.20965 3.99185 3.27792 3.92052 3.34925 3.84151C3.42059 3.76251 3.49729 3.67123 3.57937 3.59069C3.66144 3.51015 3.73278 3.44495 3.80948 3.37285C3.88618 3.30075 3.97286 3.21944 4.05954 3.14273C4.14621 3.06603 4.22829 3.01157 4.31343 2.94637C4.39857 2.88117 4.49062 2.8083 4.58343 2.74464C4.67624 2.68097 4.76368 2.62958 4.85419 2.57359C4.94471 2.51759 5.04596 2.45163 5.1449 2.3964C5.24385 2.34117 5.33436 2.29975 5.42948 2.25296C5.52459 2.20617 5.63505 2.14865 5.7409 2.09955C5.84675 2.05046 5.93803 2.02285 6.03774 1.98373C6.13746 1.94461 6.25558 1.89936 6.36757 1.8633C6.46806 1.83032 6.57161 1.80424 6.67439 1.77663C6.78945 1.74518 6.9045 1.71296 7.02109 1.68688C7.12465 1.66464 7.2305 1.6493 7.33558 1.63089C7.45601 1.61095 7.57567 1.58947 7.69839 1.57566C7.80425 1.56339 7.9124 1.55802 8.01902 1.55112C8.1103 1.54498 8.20234 1.53961 8.29516 1.53731C7.86677 2.63463 7.67332 3.8096 7.72729 4.98634C7.78127 6.16307 8.08147 7.3154 8.6085 8.3689C9.13554 9.4224 9.87769 10.3536 10.787 11.1024C11.6964 11.8513 12.7527 12.401 13.8877 12.7162L13.8693 12.7408C13.5551 13.1333 13.1991 13.4906 12.8077 13.8062L12.7471 13.8507C12.5737 13.9872 12.3942 14.1161 12.2101 14.2342C12.1695 14.2603 12.1273 14.2848 12.0859 14.3109C11.9164 14.4145 11.743 14.5119 11.5651 14.6008C11.5152 14.6262 11.4653 14.6499 11.4117 14.6729C11.2368 14.7558 11.0588 14.8264 10.8747 14.8969C10.8195 14.9176 10.765 14.9383 10.7098 14.9575C10.5296 15.0196 10.3455 15.0718 10.1598 15.1186C10.1008 15.1339 10.0425 15.1508 9.98342 15.1646C9.79473 15.2068 9.5999 15.2375 9.40967 15.2643C9.35138 15.272 9.29461 15.2843 9.23632 15.2904C8.27265 15.3983 7.29705 15.3015 6.37341 15.0062C5.44977 14.7109 4.59892 14.2238 3.87659 13.5769C3.15426 12.9299 2.57673 12.1377 2.18183 11.2521C1.78693 10.3664 1.58356 9.40734 1.58505 8.43764ZM14.7399 11.3478C13.7206 11.1398 12.762 10.7025 11.9367 10.0691C11.1115 9.43565 10.4413 8.62267 9.97687 7.69178C9.51245 6.76088 9.26603 5.73648 9.25626 4.69621C9.2465 3.65594 9.47366 2.6271 9.92052 1.68765C10.9374 1.90071 11.8929 2.34118 12.7154 2.97605C13.5378 3.61092 14.2059 4.42371 14.6696 5.3535C15.1332 6.2833 15.3804 7.30598 15.3925 8.3449C15.4047 9.38381 15.1816 10.412 14.7399 11.3524V11.3478Z"
        fill="currentColor"
      />
    ),
  },
  keeper: {
    viewBox: '0 0 165 165',
    path: (
      <g>
        <circle cx="82.7254" cy="82.1766" r="25.5145" stroke="#CFC3CF" />
        <circle cx="82.7256" cy="82.1768" r="81.6768" stroke="#CFC3CF" />
        <mask id="path-3-inside-1" fill="white">
          <path d="M29.3424 82.1766C29.3424 89.187 30.7232 96.1287 33.406 102.605C36.0888 109.082 40.0209 114.967 44.978 119.924C49.9351 124.881 55.82 128.813 62.2968 131.496C68.7735 134.179 75.7153 135.56 82.7257 135.56C89.736 135.56 96.6778 134.179 103.155 131.496C109.631 128.813 115.516 124.881 120.473 119.924C125.43 114.967 129.363 109.082 132.045 102.605C134.728 96.1287 136.109 89.187 136.109 82.1766L107.976 82.1766C107.976 85.4925 107.323 88.776 106.054 91.8396C104.785 94.9031 102.925 97.6867 100.581 100.031C98.2358 102.376 95.4522 104.236 92.3887 105.505C89.3251 106.774 86.0416 107.427 82.7257 107.427C79.4097 107.427 76.1262 106.774 73.0627 105.505C69.9991 104.236 67.2155 102.376 64.8708 100.031C62.526 97.6867 60.6661 94.9031 59.3971 91.8396C58.1282 88.776 57.475 85.4925 57.475 82.1766L29.3424 82.1766Z" />
        </mask>
        <path
          d="M29.3424 82.1766C29.3424 89.187 30.7232 96.1287 33.406 102.605C36.0888 109.082 40.0209 114.967 44.978 119.924C49.9351 124.881 55.82 128.813 62.2968 131.496C68.7735 134.179 75.7153 135.56 82.7257 135.56C89.736 135.56 96.6778 134.179 103.155 131.496C109.631 128.813 115.516 124.881 120.473 119.924C125.43 114.967 129.363 109.082 132.045 102.605C134.728 96.1287 136.109 89.187 136.109 82.1766L107.976 82.1766C107.976 85.4925 107.323 88.776 106.054 91.8396C104.785 94.9031 102.925 97.6867 100.581 100.031C98.2358 102.376 95.4522 104.236 92.3887 105.505C89.3251 106.774 86.0416 107.427 82.7257 107.427C79.4097 107.427 76.1262 106.774 73.0627 105.505C69.9991 104.236 67.2155 102.376 64.8708 100.031C62.526 97.6867 60.6661 94.9031 59.3971 91.8396C58.1282 88.776 57.475 85.4925 57.475 82.1766L29.3424 82.1766Z"
          stroke="#CFC3CF"
          strokeWidth="2"
          mask="url(#path-3-inside-1)"
        />
      </g>
    ),
  },
  wireframeGlobe: {
    viewBox: '0 0 165 165',

    path: (
      <g>
        <circle cx="82.4644" cy="82.7481" r="81.752" stroke="currentColor" />
        <path
          d="M164.216 82.7484C164.216 86.793 162.023 90.7066 157.922 94.3262C153.822 97.9452 147.86 101.227 140.451 103.993C125.635 109.525 105.134 112.956 82.4644 112.956C59.795 112.956 39.294 109.525 24.4783 103.993C17.0687 101.227 11.1071 97.9452 7.00705 94.3262C2.90625 90.7066 0.712402 86.793 0.712402 82.7484C0.712402 78.7038 2.90625 74.7902 7.00705 71.1706C11.1071 67.5516 17.0687 64.2697 24.4783 61.5034C39.294 55.9723 59.795 52.541 82.4644 52.541C105.134 52.541 125.635 55.9723 140.451 61.5034C147.86 64.2697 153.822 67.5516 157.922 71.1706C162.023 74.7902 164.216 78.7038 164.216 82.7484Z"
          stroke="currentColor"
        />
        <path
          d="M82.465 164.5C78.4204 164.5 74.5067 162.306 70.8871 158.205C67.2682 154.105 63.9863 148.144 61.22 140.734C55.6888 125.919 52.2576 105.418 52.2576 82.7481C52.2576 60.0787 55.6888 39.5776 61.22 24.762C63.9863 17.3523 67.2682 11.3908 70.8871 7.29074C74.5067 3.18994 78.4204 0.996092 82.465 0.996092C86.5095 0.996093 90.4232 3.18994 94.0428 7.29074C97.6618 11.3908 100.944 17.3523 103.71 24.762C109.241 39.5776 112.672 60.0787 112.672 82.7481C112.672 105.418 109.241 125.919 103.71 140.734C100.944 148.144 97.6618 154.105 94.0428 158.205C90.4232 162.306 86.5095 164.5 82.465 164.5Z"
          stroke="currentColor"
        />
      </g>
    ),
  },
  codeCanvas: {
    viewBox: '0 0 255 256',
    path: (
      <g>
        <rect
          x="0.919922"
          y="1.14648"
          width="253.441"
          height="253.441"
          fill="none"
          stroke="currentColor"
        />
        <line x1="0.419922" y1="28.2744" x2="254.861" y2="28.2744" stroke="currentColor" />
        <circle cx="16.0038" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
        <circle cx="35.3685" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
        <circle cx="53.64" cy="14.6298" r="5.48525" fill="none" stroke="currentColor" />
      </g>
    ),
  },
};

const theme = {
  ...makerTheme,
  useColorSchemeMediaQuery: true,

  icons,

  colors: {
    ...makerTheme.colors,

    modes: {
      dark: {
        background: '#3E113F',
        surface: '#340F35',
        // surface: '#ffffff08',
        text: '#EAEBF0',
        // text: '#fffff0',
        onBackground: '#EAEBF0',
        primary: '#F34181',
        primaryEmphasis: '#F34181F2',
        primaryMuted: '#F34181E6',
        primaryAlt: '#F34181D9',

        // primary: '#F012BE',
        muted: '#694769',
        // muted: '#ffffff08',
        mutedAlt: '#5a495c',
        onBackgroundAlt: '#EAEBF0',
        // onBackgroundAlt: '#e1dfec',
        onBackgroundMuted: '#CFC3CF',
        onSurface: '#ABA8bc',
      },
    },
  },

  fonts: {
    body: 'Inconsolata, sans-serif',
    heading:
      "'FT Base',-apple-system,system-ui,BlinkMacSystemFont,'SF Pro Text','Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    monospace: 'monospace',
  },

  text: {
    ...makerTheme.text,
    megaHeading: {
      variant: 'text.heading',
      fontSize: [8, 10],
    },
  },

  links: {
    ...makerTheme.links,
    nav: {
      ...makerTheme.links.nav,
      fontFamily: 'heading',
    },
    sidebar: {
      variant: 'links.nav',
      fontSize: 1,
    },
  },
  cards: {
    primary: {
      ...makerTheme.cards.primary,
      border: '',
    },
  },
  buttons: {
    ...makerTheme.buttons,
    contrastButtonSmall: {
      variant: 'buttons.small',
      bg: 'onBackgroundAlt',
      color: 'background',
      '&:hover': {
        bg: 'primary',
        color: 'onPrimary',
      },
      '&:active': {
        bg: 'primary',
        color: 'onPrimary',
      },
    },
  },
  forms: {
    ...makerTheme.forms,
    contrastTextarea: {
      color: 'background',
      bg: 'onBackgroundAlt',
    },
  },
  styles: {
    ...makerTheme.styles,
    fakeLi: {
      listStyle: 'none',
    },

    h1: {
      ...makerTheme.styles.h1,
      mt: 4,
    },

    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:hover': {
        color: 'primaryEmphasis',
      },
    },
    ul: {
      pl: 4,
    },
    pre: {
      bg: 'background',
    },
    code: {
      ...makerTheme.styles.code,
      p: 0,
      m: 0,
    },
    // applies to single-backticks
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: 3,
      bg: 'primaryMuted',
      color: 'primaryAlt',
      px: 1,
    },
  },
};

export default theme;
