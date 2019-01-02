import classNames from "classnames/bind";
import * as React from "react";

const styles = require("./table.scss");
const cx = classNames.bind(styles).default || classNames.bind(styles);

export interface IColumn {
  title: string;
  key: string;
}

export interface IDateSource {
  [key: string]: any;
}

export interface ITableProps {
  dataSource: IDateSource[];
  columns: IColumn[];
  tableCls?: string;
  bordered?: boolean;
  striped?: boolean;
  size?: TableSize;
  theme?: TableTheme;
}

export enum TableSize {
  Small = "small",
  Large = "large"
}

export enum TableTheme {
  Striped = "striped",
  Basic = "basic"
}

export class Table extends React.Component<ITableProps, {}> {
  public static defaultProps: Partial<ITableProps> = {
    bordered: false,
    size: TableSize.Small,
    theme: TableTheme.Basic,
    tableCls: ""
  };

  public render() {
    const { columns, dataSource, tableCls, bordered, size, theme } = this.props;
    const theadComponent: React.ReactNode = this.getHeadComponent(columns);
    const tbodyComponent: React.ReactNode = this.getBodyComponent(
      columns,
      dataSource
    );

    return (
      <div className={styles.tableContainer}>
        <table className={cx({ bordered }, size, theme, tableCls)}>
          {theadComponent}
          {tbodyComponent}
        </table>
      </div>
    );
  }
  public getBodyComponent(
    columns: IColumn[],
    dataSource: IDateSource[]
  ): React.ReactNode {
    const keyInOrder = columns.map(column => column.key);
    return (
      <tbody>
        {dataSource.map(rowData => {
          return (
            <tr key={`tr-${rowData.key}`}>
              {keyInOrder.map(key => {
                return <td key={`td-${key}`}>{rowData[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
  public getHeadComponent(columns: IColumn[]): React.ReactNode {
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
