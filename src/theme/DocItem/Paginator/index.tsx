import React, {type ReactNode} from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import type PaginatorType from '@theme/DocItem/Paginator';
import type {WrapperProps} from '@docusaurus/types';
import GiscusComponent from '@site/src/components/GiscusComponent';

type Props = WrapperProps<typeof PaginatorType>;

export default function PaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <Paginator {...props} />
      <GiscusComponent />
    </>
  );
}
