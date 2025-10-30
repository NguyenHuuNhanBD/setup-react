import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '~/components/ui/select'

interface ISelectCustomProps {
  placeholder?: string
  classNameSelectTrigger?: string
  children?: React.ReactNode
}
const SelectCustom = ({ placeholder = 'Select', classNameSelectTrigger, children }: ISelectCustomProps) => {
  return (
    <Select>
      <SelectTrigger isHiddenBorder className={classNameSelectTrigger}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectCustom
