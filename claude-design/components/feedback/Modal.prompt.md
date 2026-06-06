Centered confirmation/notes dialog; render inside a `position: relative` view so the scrim fills it.

```jsx
const [open, setOpen] = React.useState(true)
<Modal open={open} onClose={() => setOpen(false)} title="What's new in v0.9.1"
  footer={<>
    <Button variant="secondary" onClick={() => setOpen(false)}>Later</Button>
    <Button variant="accent-soft">Restart & Install</Button>
  </>}>
  Release notes go here…
</Modal>
```

Click the scrim or the ✕ to dismiss. Body scrolls; header/footer stay pinned.
