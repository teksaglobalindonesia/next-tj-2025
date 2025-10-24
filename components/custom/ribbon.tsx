export default function Ribbon() {
    return (
        <section className="flex flex-col items-center justify-center px-[104px] py-[106px] bg-neutral-silver">
            <h2 className="text-[64px] text-neutral-black font-inte font-semibold text-center w-[850px] h-[146px] mb-14 leading-tight">
                Pellentesque suscipit fringilla libero eu.
            </h2>
            <button className="bg-brand-primary hover:bg-green-700 w-[178px] h-[52px] font-inter font-medium text-neutral-white text-[16px] px-6 py-3 rounded-sm">
                Get a Demo →
            </button>
        </section>
    );
}