interface DisadvanatageItemProps {
  disadvantageItem: string;
}

export default function DisadvanatageItem({
  disadvantageItem,
}: DisadvanatageItemProps) {
  return (
    <li className="flex items-center gap-x-3 xl:gap-x-[18px]">
      <span className="size-[14px] xl:size-6 rounded-full bg-white"></span>
      <p className="w-[90%] text-12reg xl:text-20reg">{disadvantageItem}</p>
    </li>
  );
}
