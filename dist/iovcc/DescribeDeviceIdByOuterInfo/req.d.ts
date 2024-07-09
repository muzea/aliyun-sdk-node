export interface DescribeDeviceIdByOuterInfoRequest {
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 第三方设备唯一标识类型。
     * 目前支持：**sn**、**vin**、**hardware_id**。
     * @example `sn`
     */
    "QueryType"?: string;
    /**
     * 第三方设备唯一标识的值。
     * @example `12345abcde`
     */
    "QueryValue"?: string;
}
