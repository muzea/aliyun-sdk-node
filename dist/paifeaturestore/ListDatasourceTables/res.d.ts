export interface ListDatasourceTablesResponse {
    /**
     * 请求ID。
     * @example `C03B2680-AC9C-59CD-93C5-8142B92537FA`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 数据表列表。
     */
    Tables: string[];
}
