import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

type InViewHookReturn = {
  ref: RefObject<Element>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
};

export function useInView({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  triggerOnce = false,
}: UseInViewOptions = {}): InViewHookReturn {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<Element>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || (triggerOnce && frozen.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        setEntry(entry);

        if (entry.isIntersecting && triggerOnce) {
          frozen.current = true;
          observer.unobserve(node);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, inView, entry };
}
