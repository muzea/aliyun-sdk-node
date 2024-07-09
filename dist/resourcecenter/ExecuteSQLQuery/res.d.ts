export interface ExecuteSQLQueryResponse {
    /**
     * 请求ID。
     * @example `D696E6EF-3A6D-5770-801E-4982081FE4D0`
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
