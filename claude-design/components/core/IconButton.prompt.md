Icon-only square button for toolbars and card actions; pair with a `title` for the tooltip.

```jsx
import { RefreshCw, Trash2 } from 'lucide-react'

<IconButton title="Refresh"><RefreshCw size={14} /></IconButton>
<IconButton variant="danger" title="Remove"><Trash2 size={14} /></IconButton>
```

Variants: `ghost` (default) · `solid` · `danger`.
