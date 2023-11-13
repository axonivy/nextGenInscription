import './TableCell.css';
import type { ReactNode } from 'react';

export const TableCell = (props: { children: ReactNode }) => <td className='table-cell'>{props.children}</td>;
