import React from 'react';
import { Whiteboard } from '@100mslive/hms-whiteboard';
import {  useWhiteboard } from '@100mslive/react-sdk';
import '@100mslive/hms-whiteboard/index.css';
export const App = () => {
  const { token, endpoint, zoomToContent } = useWhiteboard();

  return (
    <Whiteboard token={token} endpoint={`https://${endpoint}`} zoomToContent={zoomToContent} />
  );
};
