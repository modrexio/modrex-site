Small dense action button — use for any click action; `primary` (accent) for the main affirmative action, `secondary` for neutral, `danger` for destructive.

```jsx
import { Download } from 'lucide-react'

<Button variant="primary" icon={<Download size={14} />}>Install</Button>
<Button variant="secondary">Launch without mods</Button>
<Button variant="danger" size="md">Remove</Button>
```

Variants: `primary` · `secondary` · `ghost` · `danger` · `accent-soft`. Sizes: `sm` (default) · `md`. Pass `loading` for an inline spinner, `iconRight` for a trailing icon.
