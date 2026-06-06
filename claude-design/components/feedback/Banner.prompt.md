Top-of-view status strip for app-level state (launch errors, mods hidden, updates available).

```jsx
import { TriangleAlert } from 'lucide-react'

<Banner variant="warning" icon={<TriangleAlert size={14} />}
        action={<Button variant="secondary">Restore mods</Button>}>
  Mods are hidden — the game was launched in vanilla mode.
</Banner>
```

Variants: `info` (accent) · `warning` · `danger`.
