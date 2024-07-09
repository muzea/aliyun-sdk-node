export interface DescribeEsExceptionDataResponse {
    /**
     * 请求ID。
     * @example `99D61AB3-6164-4CF2-A0DE-129C9B07618B`
     */
    RequestId: string;
    /**
     * ES执行异常情况的规则内容。
     */
    Contents: {
        /**
         * ES规则执行异常情况图表的表名。
         * @example `401`
         */
        Name: string;
        /**
         * 图表对应列的时间和数值列表。
         */
        Points: string[];
        /**
         * ES规则执行异常情况图表的时间和列名列表。
         */
        Columns: string[];
    }[];
}
