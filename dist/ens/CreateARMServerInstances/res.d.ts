export interface CreateARMServerInstancesResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 订单号。
     * @example `212630314490***`
     */
    OrderId: string;
    /**
     * 实例ID列表。
     */
    InstanceIds: string[];
}
