Controlled pill switch for binary state (enable/disable a mod, opt-in settings).

```jsx
const [on, setOn] = React.useState(true)
<Toggle checked={on} onChange={setOn} title="Enable mod" />
```

Track turns accent when `checked`. Pass `disabled` for missing/locked items.
