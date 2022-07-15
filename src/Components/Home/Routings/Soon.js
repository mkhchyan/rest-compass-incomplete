import { Link } from 'react-router-dom';
import './routings.css'
// import Img from './img/image.jpg';

export const Soon = () => {
    return <>
      <div className='routers'>
            <div className='card card1'>
                <div className='card-opacity'>
                    <div className='soon'>
                        <p>Շուտով</p>
                    </div>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.0234 5.19141H50.2734V2.19141C50.2734 1.08691 49.3781 0.191406 48.2734 0.191406C47.1688 0.191406 46.2734 1.08691 46.2734 2.19141V5.19141H18.2734V2.19141C18.2734 1.08691 17.3781 0.191406 16.2734 0.191406C15.1688 0.191406 14.2734 1.08691 14.2734 2.19141V5.19141H8.52344C3.97431 5.19141 0.273438 8.89228 0.273438 13.4414V55.9414C0.273438 60.4905 3.97431 64.1914 8.52344 64.1914H56.0234C60.5726 64.1914 64.2734 60.4905 64.2734 55.9414V13.4414C64.2734 8.89228 60.5726 5.19141 56.0234 5.19141ZM8.52344 9.19141H14.2734V11.1914C14.2734 12.2959 15.1688 13.1914 16.2734 13.1914C17.3781 13.1914 18.2734 12.2959 18.2734 11.1914V9.19141H46.2734V11.1914C46.2734 12.2959 47.1688 13.1914 48.2734 13.1914C49.3781 13.1914 50.2734 12.2959 50.2734 11.1914V9.19141H56.0234C58.3669 9.19141 60.2734 11.0979 60.2734 13.4414V18.1914H4.27344V13.4414C4.27344 11.0979 6.17994 9.19141 8.52344 9.19141ZM56.0234 60.1914H8.52344C6.17994 60.1914 4.27344 58.2849 4.27344 55.9414V22.1914H60.2734V55.9414C60.2734 58.2849 58.3669 60.1914 56.0234 60.1914Z" fill="white" />
                    </svg>
                    <Link to='/'>Ո՞ւր գնալ <br/> Weekend-ին</Link>
                    <span />
                </div>
            </div>
            <div className='card card2'>
                <div className='card-opacity'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.4143 33.1298C61.1459 32.6029 61.1459 31.9986 61.4143 31.4719L63.9019 26.5888C65.287 23.87 64.1896 20.6294 61.4036 19.211L56.3999 16.6636C55.8601 16.3888 55.49 15.8998 55.3843 15.3225L54.4057 9.9689C53.8608 6.98819 50.9873 4.98521 47.8651 5.40908L42.2566 6.17032C41.6512 6.25232 41.0526 6.06557 40.6135 5.65795L36.5424 1.879C34.2756 -0.225228 30.7244 -0.225353 28.4577 1.879L24.3865 5.65833C23.9472 6.06607 23.3486 6.25245 22.7434 6.1707L17.1349 5.40946C14.0116 4.98534 11.1392 6.98856 10.5943 9.96928L9.61567 15.3226C9.51002 15.9001 9.13992 16.389 8.60021 16.6638L3.59653 19.2113C0.810566 20.6295 -0.286832 23.8704 1.0982 26.5892L3.58571 31.4722C3.85407 31.999 3.85407 32.6033 3.58571 33.13L1.09807 38.013C-0.286962 40.7318 0.810435 43.9724 3.5964 45.3907L8.60008 47.9382C9.13992 48.213 9.51002 48.702 9.61567 49.2793L10.5943 54.6329C11.0903 57.3464 13.5152 59.2493 16.3021 59.2491C16.5765 59.2491 16.8551 59.2306 17.135 59.1926L22.7435 58.4313C23.3484 58.349 23.9474 58.5361 24.3866 58.9437L28.4577 62.7227C29.5913 63.7749 31.0454 64.3009 32.5 64.3008C33.9542 64.3007 35.4092 63.7747 36.5423 62.7227L40.6135 58.9437C41.0528 58.5361 41.6515 58.3498 42.2566 58.4313L47.8651 59.1926C50.9888 59.6166 53.8608 57.6135 54.4057 54.6328L55.3845 49.2794C55.4901 48.702 55.8602 48.2131 56.3999 47.9382L61.4036 45.3907C64.1896 43.9725 65.287 40.7317 63.9019 38.0128L61.4143 33.1298ZM59.6005 42.1299L54.5968 44.6774C53.0016 45.4897 51.9074 46.9345 51.5954 48.6415L50.6168 53.9949C50.4325 55.0034 49.4608 55.6807 48.4039 55.5376L42.7954 54.7764C41.0068 54.5333 39.2369 55.0856 37.9388 56.2905L33.8676 60.0693C33.1008 60.7811 31.8993 60.7811 31.1323 60.0693L27.0612 56.2904C25.9641 55.272 24.5298 54.7201 23.0325 54.7201C22.7581 54.7201 22.4816 54.7386 22.2046 54.7763L16.5961 55.5375C15.5401 55.6807 14.5676 55.0033 14.3832 53.9948L13.4045 48.6412C13.0923 46.9342 11.9983 45.4894 10.4029 44.6772L5.39921 42.1298C4.45657 41.6499 4.0853 40.5536 4.55388 39.6337L7.04153 34.7506C7.83461 33.1936 7.83461 31.4079 7.04153 29.8509L4.55388 24.9679C4.0853 24.048 4.45657 22.9516 5.39921 22.4718L10.4029 19.9243C11.9982 19.1119 13.0923 17.6672 13.4043 15.9602L14.3829 10.6068C14.5674 9.59828 15.5389 8.92079 16.5958 9.06404L22.2043 9.82528C23.9923 10.0682 25.7628 9.51603 27.061 8.31117L31.1322 4.53222C31.8989 3.82048 33.1004 3.82048 33.8674 4.53222L37.9385 8.31117C39.2367 9.51616 41.0069 10.0682 42.7951 9.82528L48.4037 9.06404C49.4598 8.92067 50.4322 9.59828 50.6166 10.6068L51.5952 15.9603C51.9073 17.6673 53.0013 19.1122 54.5967 19.9243L59.6004 22.4718C60.543 22.9516 60.9143 24.048 60.4457 24.9679L57.9581 29.8508C57.165 31.4077 57.165 33.1936 57.9581 34.7505L60.4457 39.6334C60.9144 40.5535 60.5432 41.65 59.6005 42.1299Z" fill="white" />
                        <path d="M46.5585 18.815C45.8075 18.0942 44.5895 18.0942 43.8383 18.815L18.4501 43.1759C17.6989 43.8967 17.6989 45.0653 18.4501 45.786C18.8256 46.1464 19.3179 46.3266 19.8101 46.3266C20.3023 46.3266 20.7947 46.1465 21.1701 45.786L46.5584 21.4252C47.3098 20.7043 47.3098 19.5358 46.5585 18.815Z" fill="white" />
                        <path d="M24.8076 15.6895C20.9188 15.6895 17.7549 18.7253 17.7549 22.4568C17.7549 26.1882 20.9188 29.224 24.8076 29.224C28.6964 29.224 31.8603 26.1882 31.8603 22.4568C31.8603 18.7253 28.6964 15.6895 24.8076 15.6895ZM24.8076 25.5327C23.04 25.5327 21.6019 24.1529 21.6019 22.4566C21.6019 20.7605 23.04 19.3807 24.8076 19.3807C26.5752 19.3807 28.0134 20.7605 28.0134 22.4566C28.0133 24.1529 26.5752 25.5327 24.8076 25.5327Z" fill="white" />
                        <path d="M40.1933 35.377C36.3045 35.377 33.1406 38.4128 33.1406 42.1443C33.1406 45.8757 36.3045 48.9115 40.1933 48.9115C44.0822 48.9115 47.246 45.8757 47.246 42.1443C47.246 38.4128 44.0822 35.377 40.1933 35.377ZM40.1933 45.2202C38.4257 45.2202 36.9875 43.8404 36.9875 42.1443C36.9875 40.4481 38.4256 39.0683 40.1933 39.0683C41.961 39.0683 43.399 40.4481 43.399 42.1443C43.399 43.8404 41.961 45.2202 40.1933 45.2202Z" fill="white" />
                    </svg>
                    <Link to='/'>Զեղչեր <br/> ակցիաներ</Link>
                    <span />
                    <div className='soon'>
                        <p>Շուտով</p>
                    </div>
                </div>
            </div>
            <div className='card card3'>
                <div className='card-opacity'>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.297 36.2538L37.3276 35.2607L34.2187 29.0847C33.8897 28.4303 33.2202 28.0176 32.4869 28.0176C31.7549 28.0176 31.0854 28.4303 30.7564 29.0847L27.6462 35.2607L20.678 36.2538C19.943 36.3582 19.3323 36.8735 19.1053 37.58C18.8789 38.2866 19.075 39.0611 19.6122 39.574L24.6313 44.371L23.4489 51.1334C23.3221 51.8588 23.6164 52.5932 24.2101 53.029C24.8031 53.4654 25.5922 53.5274 26.2465 53.1905L32.4881 49.9741L38.7298 53.1905C39.3835 53.5274 40.1726 53.4648 40.765 53.0284C41.3574 52.5932 41.653 51.8588 41.5268 51.134L40.3437 44.3716L45.3635 39.5746C45.9001 39.0623 46.0968 38.2872 45.8697 37.5812C45.6427 36.8747 45.0321 36.3588 44.297 36.2544V36.2538ZM36.9161 42.2823C36.4481 42.7291 36.2345 43.3804 36.3461 44.0177L37.0351 47.9552L33.3756 46.0693C32.8189 45.7822 32.1573 45.7822 31.5995 46.0693L27.94 47.9552L28.6283 44.0177C28.7406 43.3804 28.5263 42.7291 28.0584 42.2823L25.1764 39.5291L29.1959 38.9567C29.8241 38.8674 30.3685 38.4759 30.6538 37.9096L32.4869 34.2677L34.3212 37.9096C34.6065 38.4759 35.151 38.8674 35.7786 38.9567L39.7987 39.5291L36.9161 42.2823Z" fill="white" />
                        <path d="M56.2373 5.30078H50.4873V2.30078C50.4873 1.19628 49.5919 0.300781 48.4873 0.300781C47.3827 0.300781 46.4873 1.19628 46.4873 2.30078V5.30078H18.4873V2.30078C18.4873 1.19628 17.5919 0.300781 16.4873 0.300781C15.3827 0.300781 14.4873 1.19628 14.4873 2.30078V5.30078H8.7373C4.18818 5.30078 0.487305 9.00166 0.487305 13.5508V56.0508C0.487305 60.5999 4.18818 64.3008 8.7373 64.3008H56.2373C60.7864 64.3008 64.4873 60.5999 64.4873 56.0508V13.5508C64.4873 9.00166 60.7864 5.30078 56.2373 5.30078ZM8.7373 9.30078H14.4873V11.3008C14.4873 12.4053 15.3827 13.3008 16.4873 13.3008C17.5919 13.3008 18.4873 12.4053 18.4873 11.3008V9.30078H46.4873V11.3008C46.4873 12.4053 47.3827 13.3008 48.4873 13.3008C49.5919 13.3008 50.4873 12.4053 50.4873 11.3008V9.30078H56.2373C58.5808 9.30078 60.4873 11.2073 60.4873 13.5508V18.3008H4.4873V13.5508C4.4873 11.2073 6.3938 9.30078 8.7373 9.30078ZM56.2373 60.3008H8.7373C6.3938 60.3008 4.4873 58.3943 4.4873 56.0508V22.3008H60.4873V56.0508C60.4873 58.3943 58.5808 60.3008 56.2373 60.3008Z" fill="white" />
                    </svg>
                    <Link to='/'>Տոներ <br/> Իվենթներ</Link>
                    <span />
                    <div className='soon'>
                        <p>Շուտով</p>
                    </div>
                </div>
            </div>
            <div className='card card4'>
                <div className='card-opacity'>
                    <Link to='/'>Տոպ <br/> ապարտամենտներ </Link>
                    <span />
                    <div className='soon'>
                        <p>Շուտով</p>
                    </div>
                </div>
            </div>
            <div className='card card5'>
                <div className='card-opacity'>
                    <svg width="44" height="67" viewBox="0 0 44 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.3684 17.2773C40.1838 16.0927 38.5846 15.382 36.8077 15.382H32.6025V4.36544C32.6025 3.29932 32.2471 2.29244 31.5956 1.58169C30.9441 0.81172 29.9965 0.337891 28.9303 0.337891H14.597C13.5309 0.337891 12.5832 0.81172 11.9317 1.58169C11.2802 2.29244 10.9248 3.29932 10.9248 4.36544V15.3227H6.71959C4.94274 15.3227 3.28433 16.0335 2.15899 17.2181C0.974416 18.4026 0.263672 20.0018 0.263672 21.7787V53.9398C0.263672 55.7167 0.974416 57.3751 2.15899 58.5004C3.04742 59.3889 4.23199 60.0404 5.59425 60.2773V61.6395C5.59425 62.9426 6.12731 64.1271 6.95651 64.9564C7.78571 65.7856 8.97028 66.3186 10.2733 66.3186H10.451C11.754 66.3186 12.9386 65.7856 13.7678 64.9564C14.597 64.1271 15.1301 62.9426 15.1301 61.6395V60.3957H28.3973V61.6395C28.3973 62.9426 28.9303 64.1271 29.7595 64.9564C30.5887 65.7856 31.7733 66.3186 33.0763 66.3186H33.254C34.4978 66.3186 35.6824 65.8448 36.5116 65.0156L36.5708 64.9564C37.4 64.1271 37.9331 62.9426 37.9331 61.6395V60.2773C39.2361 60.0404 40.4207 59.3889 41.3684 58.5004C42.5529 57.3159 43.2637 55.7167 43.2637 53.9398V21.8379C43.2637 20.061 42.5529 18.4026 41.3684 17.2773ZM13.2347 4.36544C13.2347 3.89161 13.4124 3.41778 13.7086 3.12164C13.9455 2.82549 14.2416 2.70704 14.597 2.70704H28.9303C29.2857 2.70704 29.5819 2.88472 29.8188 3.12164C30.1149 3.41778 30.2926 3.89161 30.2926 4.36544V15.3227H27.5681V8.15607C27.5681 7.3861 27.3904 6.67536 27.035 6.1423C26.6204 5.43155 25.9689 5.01695 25.1989 5.01695H18.3284C17.5584 5.01695 16.9069 5.43155 16.4923 6.1423C16.137 6.67536 15.9593 7.3861 15.9593 8.15607V15.382H13.2347V4.36544ZM18.3284 8.15607C18.3284 7.8007 18.3876 7.56379 18.5061 7.32687H25.0212C25.1397 7.50456 25.1989 7.8007 25.1989 8.09684V15.3227H18.3284V8.15607ZM12.7609 61.758C12.7609 62.4095 12.524 63.0018 12.0502 63.4164C11.6356 63.831 11.0433 64.1271 10.3918 64.1271H10.2141C9.56257 64.1271 8.97029 63.8902 8.55568 63.4164C8.14108 63.0018 7.84494 62.4095 7.84494 61.758V60.5142H12.7609V61.758ZM35.6824 61.758C35.6824 62.4095 35.4455 63.0018 34.9717 63.4164L34.9124 63.4756C34.4978 63.8902 33.9055 64.1271 33.3133 64.1271H33.1356C32.4841 64.1271 31.8918 63.8902 31.4772 63.4164C31.0626 63.0018 30.7664 62.4095 30.7664 61.758V60.5142H35.6824V61.758ZM41.013 53.9991C41.013 55.1244 40.5392 56.1905 39.7692 56.9013C38.9992 57.6712 37.9923 58.1451 36.867 58.1451H29.5819H13.9455H6.66037C5.53502 58.1451 4.46891 57.6712 3.75816 56.9013C2.98819 56.1313 2.51436 55.1244 2.51436 53.9991V21.8379C2.51436 20.7125 2.98819 19.6464 3.75816 18.9357C4.52813 18.1657 5.53502 17.6919 6.66037 17.6919H12.0502H17.0846H26.3243H31.3587H36.7485C37.9923 17.6919 38.9992 18.1657 39.7692 18.9357C40.5392 19.7057 41.013 20.7125 41.013 21.8379V53.9991Z" fill="white" />
                    </svg>
                    <Link to='/'>Թեժ տուրեր/<br/> Արշավներ</Link>
                    <span />
                    <div className='soon'>
                        <p>Շուտով</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}


