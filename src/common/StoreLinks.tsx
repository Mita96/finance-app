import AppleLogo from "../assets/logos/app_store.svg";
import StoreLink from "../common/StoreLink";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
import GooglePlay from "../assets/logos/google_play.svg";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className=" mt-10 hidden justify-center space-x-2  sm:flex md:justify-normal">
        <StoreLink
          href="https://www.apple.com/app-store"
          upperText="Download on the"
          lowerText="App store"
          logo={AppleLogo}
          target="_blank"
          className=" flex gap-3 rounded-lg bg-red-400 px-5 py-2 text-white hover:bg-zinc-900 active:bg-cyan-950"
        ></StoreLink>
        <StoreLink
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Google play"
          logo={GooglePlay}
          target="_blank"
          className=" flex gap-3 rounded-lg bg-red-400 px-5 py-2 text-white hover:bg-zinc-900 active:bg-cyan-950"
        ></StoreLink>
      </div>
    );
  }
  if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLink
          href="https://www.apple.com/app-store"
          upperText="Download on the"
          lowerText="App store"
          logo={AppleLogo}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-2 text-white hover:bg-zinc-900 active:bg-cyan-950"
        ></StoreLink>
        <StoreLink
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Google play"
          logo={GooglePlayBright}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-2 text-white hover:bg-zinc-900 active:bg-cyan-950"
        ></StoreLink>
      </>
    );
  }
}

export default StoreLinks;
