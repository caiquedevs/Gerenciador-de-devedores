import React from 'react';

export default function home({ color }) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6406 19.347H3.35938C2.36859 19.347 1.5625 18.5409 1.5625 17.5501V8.09619C1.5625 7.75104 1.8423 7.47119 2.1875 7.47119C2.5327 7.47119 2.8125 7.75104 2.8125 8.09619V17.5501C2.8125 17.8517 3.05781 18.097 3.35938 18.097H16.6406C16.9422 18.097 17.1875 17.8517 17.1875 17.5501V8.09619C17.1875 7.75104 17.4673 7.47119 17.8125 7.47119C18.1577 7.47119 18.4375 7.75104 18.4375 8.09619V17.5501C18.4375 18.5409 17.6315 19.347 16.6406 19.347Z"
          fill={color}
        />
        <path
          d="M19.375 10.2834C19.215 10.2834 19.0551 10.2223 18.9331 10.1003L11.1601 2.32733C10.5204 1.68764 9.47961 1.68764 8.83992 2.32733L1.06694 10.1003C0.822882 10.3444 0.427139 10.3444 0.183076 10.1003C-0.0610255 9.85624 -0.0610255 9.4605 0.183076 9.21644L7.95605 1.44342C9.08309 0.316386 10.917 0.316386 12.0439 1.44342L19.8169 9.2164C20.061 9.4605 20.061 9.8562 19.8169 10.1003C19.6949 10.2223 19.535 10.2834 19.375 10.2834V10.2834Z"
          fill={color}
        />
        <path
          d="M12.5 19.3467H7.5C7.1548 19.3467 6.875 19.0668 6.875 18.7217V13.1748C6.875 12.0979 7.75117 11.2217 8.82813 11.2217H11.1719C12.2488 11.2217 13.125 12.0979 13.125 13.1748V18.7217C13.125 19.0668 12.8452 19.3467 12.5 19.3467ZM8.125 18.0967H11.875V13.1748C11.875 12.7871 11.5596 12.4717 11.1719 12.4717H8.82813C8.44043 12.4717 8.125 12.7871 8.125 13.1748V18.0967Z"
          fill={color}
        />
      </svg>
    </>
  );
}