import * as React from "react";
import Svg, { Path } from "react-native-svg";



const MenuIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 26 20" fill={color}>
      <Path
        d="M6 1L20 0.999999"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M1 10H25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M6 19L20 19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};




const ChipIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="22" height="15" viewBox="0 0 22 15" fill={color}>
      <Path
        d="M19.5604 2.53273C18.0984 1.36471 16.1397 0.694824 14.1866 0.694824C12.046 0.694824 10.2988 1.53933 8.84542 3.2766C8.14464 4.11423 7.56731 5.09899 7.06144 6.10339C4.25502 6.20355 2.57048 7.34145 1.64033 8.30296C0.507246 9.47433 0 10.8947 0 11.7827C0 12.4069 0.0657422 13.1097 0.553566 13.5893C1.04474 14.0722 1.77147 14.1373 2.41755 14.1373C2.41845 14.1373 2.41931 14.1373 2.42026 14.1373C2.51823 14.1373 2.61491 14.1329 2.71047 14.1242C3.50402 14.0566 4.50162 13.7388 5.55079 13.4046C6.75937 13.0195 8.00912 12.6214 8.89251 12.6214C10.3175 12.6214 11.2048 12.8281 12.1443 13.0469C13.0357 13.2546 13.9575 13.4693 15.2916 13.4693C16.2541 13.4693 18.1028 13.3028 19.6704 12.1872C21.1944 11.1028 22 9.41293 22 7.3005C22 5.48279 21.1336 3.78956 19.5604 2.53273ZM2.45334 12.8479C2.44316 12.8481 2.43345 12.8499 2.42301 12.8483C2.42215 12.8482 2.42146 12.8482 2.4206 12.8483C2.41957 12.8483 2.41854 12.8483 2.41755 12.8483C1.77371 12.8483 1.54 12.7514 1.45729 12.6701C1.34565 12.5603 1.28906 12.2618 1.28906 11.7827C1.28906 11.2751 1.62937 10.1683 2.56687 9.19916C3.25398 8.48893 4.45595 7.66156 6.42542 7.44139C6.29264 7.73375 6.164 8.02297 6.03818 8.30579C4.96207 10.7249 4.03154 12.8167 2.45334 12.8479ZM15.2916 12.1803C14.1056 12.1803 13.295 11.9915 12.4367 11.7915C11.4677 11.5658 10.4656 11.3323 8.89251 11.3323C7.93255 11.3323 6.7662 11.669 5.60712 12.0343C6.19373 11.1279 6.69204 10.0077 7.216 8.82971C7.47983 8.23666 7.74525 7.63991 8.02493 7.0594C8.0392 7.03435 8.05183 7.00831 8.0627 6.98132C9.36379 4.30042 10.984 1.98384 14.1866 1.98384C17.3374 1.9838 20.7109 4.12021 20.7109 7.3005C20.7109 11.945 16.1966 12.1803 15.2916 12.1803Z"
        fill={color}
      />
    </Svg>
  );
};



const Choco = ({ color }: { color: string }) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill={color}>
      <Path
        d="M15.7974 2.51794C15.548 2.13942 15.287 1.79909 14.9263 1.5201C14.5621 1.23837 14.1516 1.01917 13.7289 0.839255C12.4571 0.298068 10.7777 0 9 0C7.22227 0 5.54285 0.298068 4.27104 0.83929C3.84712 1.0197 3.43547 1.23963 3.07051 1.52256C2.72111 1.79343 2.44413 2.15136 2.20255 2.51798C0.782235 4.67401 0 7.43904 0 10.3037V10.3245C0.00186204 11.7436 0.904848 13.0336 2.24703 13.5345C3.0378 13.8297 3.85313 14.0724 4.68364 14.2606C4.33094 14.5735 4.14586 14.9357 4.14586 15.3329C4.14586 16.7873 6.58781 17.5482 9 17.5482C11.4122 17.5482 13.8541 16.7873 13.8541 15.3329C13.8541 14.9357 13.6691 14.5736 13.3165 14.2607C14.1469 14.0725 14.9621 13.8297 15.753 13.5345C17.0951 13.0336 17.9981 11.7436 18 10.3238V10.3038C18 7.43904 17.2178 4.67401 15.7974 2.51794ZM4.68374 1.8091C5.82799 1.32216 7.36087 1.05399 8.99996 1.05399C10.6391 1.05399 12.1719 1.32216 13.3162 1.8091C14.2884 2.22282 14.8688 2.76103 14.8688 3.24878C14.8688 4.01952 13.3855 4.97816 10.8828 5.31895C10.352 4.461 9.70361 4.0003 8.99993 4.0003C8.29625 4.0003 7.64787 4.461 7.11705 5.31895C4.61439 4.97816 3.13101 4.01952 3.13101 3.24878C3.13108 2.76103 3.71155 2.22282 4.68374 1.8091ZM1.05399 10.3238V10.3037C1.05399 8.1462 1.52775 6.05565 2.40436 4.28326C2.64677 4.64882 3.05312 5.03279 3.71654 5.39217C4.49406 5.81334 5.49012 6.12658 6.62635 6.31107C6.61511 6.33928 6.60379 6.36721 6.59273 6.39591C6.05832 7.78215 5.76401 9.61409 5.76401 11.5543C5.76401 12.1873 5.79602 12.8123 5.85866 13.4202C4.74804 13.2295 3.65906 12.9366 2.61558 12.5471C1.6828 12.1989 1.05525 11.3052 1.05399 10.3238ZM11.8682 16.0358C11.1105 16.3314 10.0919 16.4942 9 16.4942C7.90814 16.4942 6.88953 16.3314 6.13178 16.0358C5.39462 15.7481 5.19985 15.4502 5.19985 15.3329C5.19985 15.1547 5.57992 14.7639 6.59979 14.4742C6.85306 14.4022 7.01436 14.1544 6.97761 13.8937C6.87172 13.1429 6.81803 12.3559 6.81803 11.5543C6.81803 9.10217 7.2892 7.22639 7.86345 6.13417C7.86503 6.13122 7.86665 6.12827 7.86816 6.12528C8.23579 5.42944 8.64519 5.05429 9 5.05429C9.35586 5.05429 9.76656 5.43151 10.135 6.13119C10.1372 6.13523 10.1391 6.13944 10.1413 6.14341C10.7134 7.23693 11.182 9.10898 11.182 11.5543C11.182 12.3559 11.1283 13.1429 11.0224 13.8937C10.9857 14.1544 11.147 14.4022 11.4002 14.4742C12.4201 14.7639 12.8002 15.1547 12.8002 15.3329C12.8002 15.4502 12.6054 15.7482 11.8682 16.0358ZM16.946 10.3231C16.9447 11.3052 16.3172 12.1989 15.3844 12.5471C14.3408 12.9366 13.2521 13.2295 12.1413 13.4202C12.2039 12.8124 12.236 12.1873 12.236 11.5543C12.236 9.61405 11.9416 7.78212 11.4072 6.39588C11.3962 6.36717 11.3849 6.33924 11.3736 6.31103C12.5098 6.12658 13.5059 5.81334 14.2834 5.39217C14.9468 5.03279 15.3532 4.64882 15.5956 4.28326C16.4722 6.05565 16.946 8.14616 16.946 10.3037V10.3231H16.946Z"
        fill={color}
      />
    </Svg>
  );
};



const SweetIcon = ({ color }: { color: string }) => {
  return (
    <Svg width="40" height="20" viewBox="0 0 278 279" fill={color}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M187.971 4.25691C182.646 9.77291 177.759 17.8749 174.852 26.0069C172.893 31.4869 172.526 34.4789 172.514 45.0709L172.5 57.6359L165.333 55.3599C139.642 47.2019 110.436 51.8309 88.5 67.5389C70.766 80.2379 57.81 100.206 53.368 121.687C50.529 135.411 52.383 157.827 57.446 171.007C57.939 172.292 56.19 172.509 45.261 172.521C34.463 172.534 31.5 172.893 26 174.859C12.836 179.565 0 189.503 0 194.988C0 199.798 3.606 202.531 16.5 207.495C23.1 210.036 29.004 212.653 29.62 213.311C30.236 213.969 31.776 219.893 33.043 226.475C34.721 235.195 35.918 239.016 37.455 240.552C38.991 242.089 42.812 243.286 51.532 244.964C58.114 246.231 64.038 247.771 64.696 248.387C65.354 249.003 67.971 254.907 70.512 261.507C76.45 276.93 80.135 280.405 86.647 276.722C90.001 274.824 96.588 266.29 99.865 259.595C104.662 249.795 106.25 241.974 105.823 230.257C105.618 224.62 105.813 220.007 106.257 220.007C106.701 220.007 108.647 220.668 110.582 221.477C122.777 226.572 144.919 227.485 160.493 223.534C176.408 219.497 187.969 212.991 200.337 201.113C223.736 178.639 232.528 143.789 222.647 112.674L220.371 105.507L232.936 105.493C243.528 105.481 246.52 105.114 252 103.155C265.164 98.4489 278 88.5109 278 83.0259C278 78.2159 274.394 75.4829 261.5 70.5189C254.9 67.9779 248.991 65.3609 248.37 64.7029C247.748 64.0449 246.292 58.3349 245.134 52.0149C242.221 36.1129 242.189 36.0799 226.687 32.9859C219.741 31.5989 213.622 30.0239 213.088 29.4859C212.555 28.9479 210.037 23.1069 207.493 16.5069C204.71 9.28491 201.877 3.61091 200.378 2.25691C196.458 -1.28509 192.744 -0.68709 187.971 4.25691ZM196.54 33.5249C198.117 37.6589 200.397 41.9709 201.605 43.1059C203.139 44.5459 207.332 45.8559 215.504 47.4459C221.94 48.6979 227.529 50.2449 227.923 50.8829C228.317 51.5199 229.429 56.4219 230.393 61.7749C231.357 67.1269 232.604 72.7109 233.163 74.1829C234.185 76.8699 240.005 80.2469 248.25 82.9379C250.313 83.6109 252 84.5349 252 84.9909C252 85.4459 249.913 86.5299 247.362 87.3989C216.912 97.7749 185.207 73.0329 188.409 41.3949C189.063 34.9269 191.684 26.0069 192.929 26.0069C193.337 26.0069 194.962 29.3899 196.54 33.5249ZM156.5 70.0069C169.941 73.4449 178.743 78.3859 188.745 88.1089C201.463 100.473 208.86 116.712 209.765 134.257C210.041 139.62 210.093 144.007 209.879 144.007C209.665 144.007 192.395 126.907 171.5 106.007L133.51 68.0069H141.095C145.407 68.0069 152.055 68.8699 156.5 70.0069ZM160.372 117.879L206.235 163.75L201.9 172.129C195.127 185.221 179.627 199.547 167.133 204.263L163.957 205.462L118.251 159.756L72.545 114.05L73.744 110.874C78.373 98.6109 92.759 82.9289 105.5 76.2579C109.9 73.9539 113.727 72.0549 114.004 72.0379C114.281 72.0209 135.147 92.6489 160.372 117.879ZM139.338 209.812C132.11 210.2 119.244 207.629 111.5 204.25C103.855 200.913 92.002 192.859 87.652 188.043C75.426 174.511 68 155.904 68 138.804V132.517L106.513 171.012L145.026 209.507L139.338 209.812ZM54.114 189.021C75.664 193.078 91.843 214.71 89.612 236.485C88.942 243.033 86.326 252.007 85.088 252.007C84.69 252.007 82.86 248.14 81.022 243.414C77.092 233.313 76.792 233.111 61.076 230.034C55.343 228.911 50.509 227.849 50.333 227.674C50.158 227.498 49.096 222.664 47.973 216.931C44.896 201.215 44.694 200.915 34.593 196.985C29.867 195.147 26 193.311 26 192.905C26 192.128 33.756 189.408 38 188.698C42.798 187.895 48.766 188.014 54.114 189.021Z"
        fill={color}
      />
    </Svg>
  );
};


export {MenuIcon,ChipIcon,Choco,SweetIcon}