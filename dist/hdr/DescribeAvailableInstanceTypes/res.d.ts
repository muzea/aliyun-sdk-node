export interface DescribeAvailableInstanceTypesResponse {
    /**
     * 请求ID
     * @example `1A7577E8-755A-5BF5-A6BA-B87286D0743F`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回结果编码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的实例总数。
     * @example `11`
     */
    TotalCount: number;
    InstanceTypes: {
        /**
         * 可用实例规格列表。
         */
        instanceType: string[];
    };
}
