Single-line text field; add `icon` for a leading glyph and `clearable` for the inline ✕.

```jsx
import { Search } from 'lucide-react'

const [q, setQ] = React.useState('')
<Input value={q} onChange={setQ} placeholder="Search mods…"
       icon={<Search size={14} />} clearable />
```

Use `mono` for paths and launch args. Focus shows the accent border.
