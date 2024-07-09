export interface CreateVirtualWareHouseRequest {
    /**
     * 交换机ID。
     * @example `vsw-uf632qye9oqt4x4sr****`
     */
    "VswitchId"?: string;
    /**
     * 计算组的规格码。您可以通过调用[DescribeVirtualWareHouseClassSet](~~417505~~)接口查询规格码。
     * @example `n1.xlarge`
     */
    "VirtualWareHouseClass": string;
    /**
     * 计算组的缓存大小，单位：GB。
     * 取值范围：200~32000。
     * >步长为100 GB。
     * @example `200`
     */
    "VirtualWareHouseCacheStorage": number;
    /**
     * 计算组描述。
     * >- 不能以http://或https://开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "VirtualWareHouseDescription"?: string;
    /**
     * 可用区ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
