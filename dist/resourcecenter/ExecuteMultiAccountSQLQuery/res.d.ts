export interface ExecuteMultiAccountSQLQueryResponse {
    /**
     * 请求ID。
     * @example `44C8A952-D6B0-5BC8-82D5-93BA02E26F2E`
     */
    RequestId: string;
    /**
     * 列信息。
     */
    Columns: {
        /**
         * 列名。
         * @example `resource_id`
         */
        Name: string;
        /**
         * 列类型。
         * @example `varchar`
         */
        Type: string;
    }[];
    /**
     * 搜索结果数组。
     */
    Rows: any[];
}
