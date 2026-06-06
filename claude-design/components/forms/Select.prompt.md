Custom dropdown for sort/category/launcher pickers; options may carry an `icon`.

```jsx
const [sort, setSort] = React.useState('bumped_at')
<Select value={sort} onChange={setSort} options={[
  { value: 'bumped_at', label: 'Last Updated' },
  { value: 'downloads', label: 'Most Downloaded' },
]} />
```

Selected row is highlighted in accent. Disabled when there's only one option.
