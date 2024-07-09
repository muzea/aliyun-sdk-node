export interface ModifyClusterDescriptionRequest {
    /**
     * 集群的描述。
     * >- 不能以http://或https://开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription": string;
    /**
     * 集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
