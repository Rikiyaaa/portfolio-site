import * as React from 'react';

function DiscordIconSvg(props) {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      // ขนาด 150x150 พิกเซล viewBox ขนาด 10x10 พิกเซล
      width="10"
      height="10"
      viewBox="0 0 22 22"

      fill="none"
      stroke="currentColor"
      {...props}
    >
      <image
        href="https://i.ibb.co/PCPkmCJ/discordicon-Photoroom.png"
        height="24"
        width="24"
      />
    </svg>
  );
}

const MemoDiscordIconSvg = React.memo(DiscordIconSvg);
export default MemoDiscordIconSvg;
