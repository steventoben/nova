export interface IconProps {}
export function Icon(props: IconProps) {
    const {} = props;
    return (
        <div>
            Icon
        </div>
    );
}

interface Props {
    size: number;
}
export const HamburgerMenuSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg viewBox="0 0 24 24" width={`${size}rem`} height={`${size}rem`} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/>
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/>
        </svg>
    );
}

export const ArrowForwardSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg viewBox="0 0 24 24" width={`${size}rem`} height={`${size}rem`} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
        </svg>
    );
}


export const FilSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg viewBox="0 0 24 24" width={`${size}rem`} height={`${size}rem`} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
        </svg>
    );
}

export const FileSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg viewBox="0 0 24 24" width={`${size}rem`} height={`${size}rem`} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm1 5h4.586l-4.586-4.586v4.586z"/>
        </svg>
    );
}

export const SheildSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={`${size}rem`} height={`${size}rem`} viewBox="0 0 24 24">
            <path d="M12 0c-2.995 2.995-7.486 4-11 4 0 8.582 5.068 16.097 11 20 5.932-3.903 11-11.418 11-20-3.514 0-8.005-1.005-11-4zm-8.912 5.894c2.455-.246 5.912-1.012 8.912-3.25v18.906c-4-3.063-8.254-8.604-8.912-15.656z"/>
        </svg>
    );
}

export const SearchSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width={`${size}rem`} height={`${size}rem`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/>
        </svg>
    );
}

export const UsersSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={`${size}rem`} height={`${size}rem`} viewBox="0 0 24 24">
            <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/>
        </svg>
    );
}

export const CloseSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={`${size}rem`} height={`${size}rem`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
        </svg>
    );
}

export const CheckSvg = (props: Props) => {
    const {
        size = 1
    } = props;
    return (
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={`${size}rem`} height={`${size}rem`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/>
        </svg>
    );
}


export const SvgElements = {
    FileSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="file" viewBox="0 0 512 545.5"><path d="M80 80h214.5l5 4.5 96 96 4.5 5V496H80V80zm32 32v352h256V208h-96v-96H112zm192 23v41h41z"></path></svg>,
    UserSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 512 545.5"><path d="M240 112c61.666 0 112 50.334 112 112 0 38.54-19.698 72.834-49.5 93 57.074 24.477 97.5 81.1 97.5 147h-32c0-70.89-57.11-128-128-128s-128 57.11-128 128H80c0-65.9 40.426-122.522 97.5-147-29.802-20.166-49.5-54.46-49.5-93 0-61.666 50.334-112 112-112zm0 32c-44.372 0-80 35.628-80 80s35.628 80 80 80 80-35.628 80-80-35.628-80-80-80z"></path></svg>,
    LockSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="lock" viewBox="0 0 512 545.5"><path d="M240 80c61.527 0 112 50.473 112 112v48h48v256H80V240h48v-48c0-61.527 50.473-112 112-112zm0 32c-44.072 0-80 35.928-80 80v48h160v-48c0-44.072-35.928-80-80-80zM112 272v192h256V272H112z"></path></svg>,
    LinkSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 512 545.5"><path d="M348 96c26.736 0 51.603 10.572 70.5 29.5 18.912 18.912 29.5 43.764 29.5 70.5s-10.588 52.088-29.5 71L395 290.5c-18.896 18.928-44.264 29.5-71 29.5-12.688 0-25.044-2.44-36.5-7l26-26c3.44.608 6.916 1 10.5 1 18.208 0 35.62-7.12 48.5-20l23.5-23.5c26.56-26.56 26.56-69.956 0-96.5-12.864-12.88-29.808-20-48-20-18.208 0-35.636 7.104-48.5 20L276 171.5c-15.952 15.935-22.264 38.28-19 59l-26 26c-4.56-11.456-7-23.796-7-36.5 0-26.736 10.588-52.088 29.5-71l23.5-23.5c18.896-18.928 44.264-29.5 71-29.5zm-39.5 116.5l23 23-128 128-23-23zM188 256c12.688 0 25.044 2.44 36.5 7l-26 26c-3.44-.608-6.916-1-10.5-1-18.208 0-35.62 7.12-48.5 20L116 331.5c-26.56 26.56-26.56 69.956 0 96.5 12.864 12.88 29.808 20 48 20 18.208 0 35.636-7.104 48.5-20l23.5-23.5c15.952-15.935 22.264-38.28 19-59l26-26c4.56 11.456 7 23.796 7 36.5 0 26.736-10.588 52.088-29.5 71L235 450.5c-18.896 18.928-44.264 29.5-71 29.5s-51.603-10.572-70.5-29.5C74.588 431.588 64 406.736 64 380s10.588-52.088 29.5-71l23.5-23.5c18.896-18.928 44.264-29.5 71-29.5z"></path></svg>,
    LightbulbSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="lightbulb-o" viewBox="0 0 512 545.5"><path d="M109 70.5l33.5 33.5-22.5 22.5L86.5 93zm294 0L425.5 93 392 126.5 369.5 104zm-147 10c78.95-.75 144 64.436 144 143.5 0 43.29-19.986 80.986-46.5 107.5-19.81 18.394-32 42.033-32 65.5v19H320v64h-36.5c-5.553 9.55-15.715 16-27.5 16s-21.947-6.45-27.5-16H192v-96c-3.24-17.87-12.705-35.39-28-48.5-35.727-30.368-57.17-77.527-50-129.5 8.977-64.628 60.63-117.062 125.5-124.5.174-.02.326.02.5 0 5.37-.652 10.736-.95 16-1zm0 32c-4.122.06-8.285.473-12.5 1-50.102 5.566-91 46.09-98 96.5-5.63 40.827 11.227 76.97 39.5 101 22.21 19.038 33.99 45.573 37.5 73h70c3.768-28.672 17.507-54.937 39-75l-.5-.5c21.486-21.486 37-50.99 37-84.5 0-61.776-50.164-112.378-112-111.5zM32 224h48v32H32v-32zm400 0h48v32h-48v-32zM120 353.5l22.5 22.5-33.5 33.5L86.5 387zm272 0l33.5 33.5-22.5 22.5-33.5-33.5zM224 416v32h64v-32h-64z"></path></svg>,
    ShieldSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="shield" viewBox="0 0 1280 1896.0833"><path d="M1088 960V320H640v1137q119-63 213-137 235-184 235-360zm192-768v768q0 86-33.5 170.5t-83 150-118 127.5T919 1511t-121 77.5-89.5 49.5-42.5 20q-12 6-26 6t-26-6q-16-7-42.5-20t-89.5-49.5-121-77.5-126.5-103-118-127.5-83-150T0 960V192q0-26 19-45t45-19h1152q26 0 45 19t19 45z"></path></svg>,
    SearchSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 1672.2646 1896.0833"><path d="M1152 832q0-185-131.5-316.5T704 384 387.5 515.5 256 832t131.5 316.5T704 1280t316.5-131.5T1152 832zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225T0 832t55.5-273.5 150-225 225-150T704 128t273.5 55.5 225 150 150 225T1408 832q0 220-124 399l343 343q37 37 37 90z"></path></svg>,
    UserFilledSvg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="user-filled" viewBox="0 0 1354.8114 1896.0833"><path d="M1280 1399q0 109-62.5 187t-150.5 78H213q-88 0-150.5-78T0 1399q0-85 8.5-160.5t31.5-152 58.5-131 94-89T327 832q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5T640 896 368.5 783.5 256 512t112.5-271.5T640 128t271.5 112.5T1024 512z"></path></svg>,
};