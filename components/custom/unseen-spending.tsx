export default function Spending() {
  return (
    <section className="flex flex-row items-center justify-between py-[40px] px-[104px]">
        <img src="/spending.png" alt="" className="w-[442px] h-[433px]"/>
        <div className="flex flex-col gap-[16px] w-[661px] h-[268px] mb-[12px]">
            <h2 className="text-[36px] font-inter font-semibold text-neutral-dgrey leading-tight w-[600px] h-[88px]">The unseen of spending three years at Pixelgrade</h2>
            <p className="font-inter text-neutral-grey text-[14px] w-[601px] h-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>

        <button className="w-[151px] h-[52px] py-[14px] px-[32px] bg-brand-primary text-white rounded-sm hover:bg-green-700 transition mt-6 gap-[10px]">
          Learn More
        </button>
        </div>
    </section>
  );
}
