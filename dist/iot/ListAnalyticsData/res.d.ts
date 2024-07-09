export interface ListAnalyticsDataResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其他：表示错误，更多信息，请参见[错误码](~~135176~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `insuficient auth:无访问权限`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7EC5B624-AF1B-4C4D-BA82-A02BA1******`
     */
    RequestId: string;
    /**
     * 表示是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `false`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据信息。
     */
    Data: {
        /**
         * 符合条件的数据详情。
         * @example `[{\"testCode\":\"TBB186\",\"testLevel\":5,\"testWorkYears\":3,\"testName\":\"王五\"},{\"testCode\":\"TBB1314\",\"testLevel\":2,\"testWorkYears\":4,\"testName\":\"李四\"},{\"testCode\":\"TBB8888\",\"testLevel\":2,\"testWorkYears\":5,\"testName\":\"熊大\"}]"`
         */
        ResultJson: string;
        /**
         * 分页的页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示结果的最大条数。
         * @example `100`
         */
        PageSize: number;
        /**
         * 符合查询条件的记录总条数。
         * @example `3`
         */
        Count: number;
        /**
         * 符合条件的数据是否有下一页：
         * - **true**：有。
         * - **false**：没有。
         * @example `false`
         */
        HasNext: boolean;
    };
}
