export interface DescribeParametersResponse {
    /**
     * 请求ID。
     * @example `863163EC-69DA-41B3-AB78-37C123114307`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * 取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `9`
     */
    TotalCount: number;
    Parameters: {
        /**
         * 参数列表。
         */
        Parameter: {
            /**
             * 运行参数值。
             * @example `1000`
             */
            Value: string;
            /**
             * 参数单位。
             * @example `INT`
             */
            DataType: string;
            /**
             * 参数描述。
             * @example `How long the coordinator should wait for seq or index scans to complete.`
             */
            Description: string;
            /**
             * 参数名。
             * @example `range_request_timeout_in_ms`
             */
            Name: string;
            /**
             * 参数默认值。
             * @example `1000`
             */
            DefaultValue: string;
            /**
             * 可修改参数值。
             * @example `R[1000, 60000]`
             */
            AllowedValues: string;
        }[];
    };
}
