export function VideoCard() {
  return (
    <div>
      <img src="/photo.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full w-12 h-12"} src="/thumb.jpg"></img>
        </div>
        <div className="col-span-11 pl-2">
          <div>Shah Rukh Khan Eye Opening Speech(english)</div>
          <div className="col-span-11 text-gray-400 text-base">Sunil Simar</div>
          <div className="col-span-11 text-gray-400 text-base">
            46Mn | 10 days ago
          </div>
        </div>
      </div>
    </div>
  );
}
