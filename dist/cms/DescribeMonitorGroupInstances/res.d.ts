export interface DescribeMonitorGroupInstancesResponse {
    /**
     * 请求ID。
     * @example `97F2A410-9412-499C-9AD1-76EF7EC02DF2`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * >状态码为200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录条数。
     * @example `12`
     */
    Total: number;
    Resources: {
        /**
         * 应用分组资源的描述信息。
         */
        Resource: {
            /**
             * 产品名称缩写。
             * @example `ecs`
             */
            Category: string;
            /**
             * 实例ID，实例的唯一标识。
             * @example `i-bp12g4xbl4i0brkn****`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `test-s1`
             */
            InstanceName: string;
            /**
             * 资源ID。
             * @example `123****`
             */
            Id: number;
            /**
             * 实例对应的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
