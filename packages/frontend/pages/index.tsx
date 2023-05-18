import Head from 'next/head';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import TestComponent from './TestComponent'
export default function Home() {
  return (
    <div className={''}>
      <TestComponent />
    </div>
  );
}
