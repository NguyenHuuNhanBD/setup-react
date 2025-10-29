interface ITitleHeadProps {
  title?: string
}
const TitleHead = ({ title }: ITitleHeadProps) => {
  return <p className='text-black-main font-semibold leading-[20px] tracking-[-0.5%]'>{title}</p>
}

export default TitleHead
