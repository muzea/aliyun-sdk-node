export interface DescribeContainerGroupStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-k`
     */
    "ZoneId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-uf6h3rbwbm90urjwa****`
     */
    "VSwitchId"?: string;
    /**
     * 资源组ID。
     * @example `rg-uf66jeqopgqa9hdn****`
     */
    "ResourceGroupId"?: string;
    /**
     * ECI实例ID序列。最多20个，字符串需按照JSON格式传入。
     * @example `["eci-bp17gw49eu09yiwm****", "eci-bp19aq49du01abcm****", "eci-2zegym1qhbmdfr1s****"]`
     */
    "ContainerGroupIds"?: string;
    /**
     * 返回最近几秒内有状态更新的ECI实例状态，用于轮询查询状态。
     * @example `60`
     */
    "SinceSecond"?: number;
    /**
     * ECI实例绑定的标签。
     */
    "Tag"?: {
        /**
         * ECI实例的标签值。
         * @example `testValue`
         */
        Value: string;
        /**
         * ECI实例的标签键。
         * @example `testKey`
         */
        Key: string;
    }[];
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * 首次查询时无需设置该参数，后续查询的Token从返回结果中获取。
     * @example `d78f2dd8-5979-42fe-xaee-b16db43be5bc`
     */
    "NextToken"?: string;
    /**
     * 限定此次返回资源（ECI实例）的数量。默认为200个。
     * > 返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `200`
     */
    "Limit"?: number;
}
