export interface CheckCreateClusterRequest {
    /**
     * 付费类型，取值说明：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：预付费（包年包月）。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 仅当付费类型为Prepaid时，该参数才生效且为可选参数。
     * 预付费集群是否自动续费，取值说明：
     * - **true**：自动续费。
     * - **false**：不自动续费，默认值。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 仅当付费类型为Prepaid时，该参数才生效且为必填参数。
     * 预付费集群为包年或包月类型，取值说明：
     * - **Year**：包年。
     * - **Month**：包月。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 仅当付费类型为Prepaid时，该参数才生效且为必填参数。
     * 预付费集群的购买时长。
     * - 当Period为Year时，取值范围：1~3（整数）。
     * - 当Period为Month时，取值范围：1~9（整数）。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * VPC ID。
     * @example `vpc-uf6xmupdn7v6ui9f7****`
     */
    "VpcId": string;
    /**
     * 交换机ID。
     * @example `vsw-uf632qye9oqt4x4sr5****`
     */
    "VswitchId": string;
    /**
     * 集群描述。
     * >- 不能以http://或https://开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription"?: string;
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
    "ZoneId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
