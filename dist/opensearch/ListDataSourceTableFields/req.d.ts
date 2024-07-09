export interface ListDataSourceTableFieldsRequest {
    /**
     * 数据源类型
     * - rds
     * - polardb
     * - odps
     * - mysql
     * - drds
     * @example `rds`
     */
    "dataSourceType": string;
    /**
     * 数据源参数。json字符串，需要urlencode编码。
     * 各数据源参数不同，参考：
     * - [rds](~~170005~~)
     * - [polardb](~~170005~~)
     * - [odps](~~170005~~)
     * - [mysql](~~173627~~)
     * - [drds](~~173627~~)
     * @example `{}`
     */
    "params": string;
    /**
     * 是否返回数据源原始字段类型
     * @example `false`
     */
    "rawType"?: boolean;
}
