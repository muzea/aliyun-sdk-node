export interface DescribeAndroidInstanceGroupsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "BizRegionId"?: string;
    /**
     * 实例组ID列表。
     */
    "InstanceGroupIds"?: string[];
    /**
     * 实例组名称。支持模糊查询。
     * @example `云手机`
     */
    "InstanceGroupName"?: string;
    /**
     * 实例组状态。
     * @example `CREATING`
     */
    "Status"?: string;
    /**
     * 售卖模式。
     * @example `standard`
     */
    "SaleMode"?: string;
    /**
     * 付费类型。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 策略ID。
     * @example `pg-1b77w6xrqfubi****`
     */
    "PolicyGroupId"?: string;
    /**
     * 密钥对的ID。
     * @example `kp-5htf0ymsrnb7q****`
     */
    "KeyPairId"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****`
     */
    "NextToken"?: string;
}
