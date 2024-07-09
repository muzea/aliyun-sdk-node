export interface DescribeDeviceServiceRequest {
    /**
     * Service ID
     * @example `s-cxxxxx`
     */
    "ServiceId"?: string;
    /**
     * 实例ID。
     * @example `i-5sg1owx0g4ojy66ab2tez77r2`
     */
    "InstanceId"?: string;
    /**
     * ENS边缘节点ID。
     * @example `cn-chongqing-11`
     */
    "RegionId"?: string;
    /**
     * 应用ID。
     * @example `a2bac6f4-75dc-455e-8389-2dc8e47526d3`
     */
    "AppId"?: string;
    /**
     * 无效参数。
     * @example `cn-chongqing-10`
     */
    "EnsRegionId"?: string;
    /**
     * 订单ID。
     * @example `2661b1dd-3453-418d-8182-bb34f79e8d3c`
     */
    "OrderId"?: string;
}
