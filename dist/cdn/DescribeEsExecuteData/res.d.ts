export interface DescribeEsExecuteDataResponse {
    /**
     * 请求ID。
     * @example `99D61AB3-6164-4CF2-A0DE-129C9B07618B`
     */
    RequestId: string;
    /**
     * ES规则内容。
     */
    Contents: {
        /**
         * ES规则运行情况图表的表名。
         * @example `Exception`
         */
        Name: string;
        /**
         * 图表对应列的时间和数值的列表。
         */
        Points: string[];
        /**
         * ES规则运行情况图表的时间和列名的列表。
         */
        Columns: string[];
    }[];
}
