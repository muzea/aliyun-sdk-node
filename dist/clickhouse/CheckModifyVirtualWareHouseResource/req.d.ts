export interface CheckModifyVirtualWareHouseResourceRequest {
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
     * 计算组ID。
     * @example `vw-uf6a499c0m3w5****`
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
