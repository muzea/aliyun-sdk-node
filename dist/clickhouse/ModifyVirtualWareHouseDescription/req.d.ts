export interface ModifyVirtualWareHouseDescriptionRequest {
    /**
     * 计算组的描述。
     * >- 不能以http://或https://开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "VirtualWareHouseDescription": string;
    /**
     * 计算组ID。
     * @example `vw-bp1w2728d535t****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
