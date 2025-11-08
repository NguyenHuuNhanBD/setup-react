export function meta() {
  return [{ title: 'ERP - Item code' }, { name: 'ERP System', content: 'Welcome to ERP' }]
}

const ItemCode = () => {
  return (
    <section className='w-full flex flex-col gap-5'>
      Item code
      {/* <Select>
        <SelectTrigger isHiddenBorder>
          <SelectValue placeholder='몸판 등 구분 선택' />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <SelectGroup>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <DemoTable /> */}
    </section>
  )
}

export default ItemCode
