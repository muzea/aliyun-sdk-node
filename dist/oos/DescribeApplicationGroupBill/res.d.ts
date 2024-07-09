export interface DescribeApplicationGroupBillResponse {
    /**
     * 翻页标记的Token
     * @example `""`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `E897A1AB-4701-5B71-93AD-38FD703763A3`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 利用率和账单详情
     */
    ApplicationGroupConsume: {
        /**
         * 实例ID。
         * @example `i-0jl781czrhqey0s5zpsj`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `test-`
         */
        InstanceName: string;
        /**
         * 实例类型。
         * @example `ALIYUN::ECS::INSTANCE`
         */
        InstanceType: string;
        /**
         * 创建时间。
         * @example `2023-06-10T06:00Z`
         */
        CreationTime: string;
        /**
         * 状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 数额。
         * @example `18.88`
         */
        Amount: number;
        /**
         * 币种。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 资源性能属性。
         * @example `"{\"mem\":\"6.82\",\"cpu\":\"0.55\"}"`
         */
        Performance: string;
        /**
         * 优化建议。
         * @example `1`
         */
        Optimization: string;
        /**
         * 峰值类型。
         * @example `WHITE`
         */
        PeakType: string;
    }[];
}
