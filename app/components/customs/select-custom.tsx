import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '~/components/ui/select'

interface ISelectCustomProps {
  placeholder?: string
  children?: React.ReactNode
}
const SelectCustom = ({ placeholder = 'Select', children }: ISelectCustomProps) => {
  return (
    <Select>
      <SelectTrigger isHiddenBorder>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectCustom
