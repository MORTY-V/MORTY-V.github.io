# Custom Hooks Demo

A React + TypeScript application demonstrating three custom hooks:

1. **usePrevious** - Returns the previous value of a state variable
2. **useDebouncedState** - Returns a state value that is debounced by a specified time
3. **useTypewriter** - Types out a string letter by letter with a specified delay

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Custom Hooks

### usePrevious

Tracks the previous value of a state variable.

```typescript
const [count, setCount] = useState(0);
const previousCount = usePrevious(count);
```

### useDebouncedState

Returns a state value that updates after a debounce delay.

```typescript
const [value, setValue] = useDebouncedState('', 500);
```

### useTypewriter

Types out a string letter by letter with a specified delay.

```typescript
const typedText = useTypewriter('Hello World', 100);
```

