'use client'

import type Entity from '@ant-design/cssinjs/es/Cache'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { useServerInsertedHTML } from 'next/navigation'
import { useMemo, useRef, type PropsWithChildren } from 'react'
import theme from './theme'

const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
  const cache = useMemo<Entity>(() => createCache(), []);
  const isServerInserted = useRef<boolean>(false);
  useServerInsertedHTML(() => {
    // Avoid duplicate insertion of CSS
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
  });
  return (
    <StyleProvider cache={cache} hashPriority='high'>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyleProvider>
  )
}

export default StyledComponentsRegistry
