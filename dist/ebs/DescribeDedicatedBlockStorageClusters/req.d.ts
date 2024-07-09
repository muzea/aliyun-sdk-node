export interface DescribeDedicatedBlockStorageClustersRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-heyuan`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以调用[DescribeZones](~~25610~~)获取可用区列表。
     * @example `cn-heyuan-b`
     */
    "AzoneId"?: string;
    /**
     * 由一个或多个专属块存储集群id组成的数组格式
     */
    "DedicatedBlockStorageClusterId"?: string[];
    /**
     * 专属块存储集群的状态。取值范围：
     * - Preparing：待交付。
     * - Running：运行中。
     * - Expired：集群到期。
     * - Offline：下线。
     * 可同时设置多个状态，取值范围为1~4。
     */
    "Status"?: string[];
    /**
     * 专属块存储集群可创建的云盘类型。
     * 取值仅支持cloud_essd，即ESSD云盘。
     * @example `cloud_essd`
     */
    "Category"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 专属集群的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 专属集群的标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 专属集群所在的企业资源组ID。您可以调用[ListResourceGroups](~~158855~~)查询资源组ID。
     * @example `rg-acfmvs4****`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `2c4d848a9628fb5e`
     */
    "NextToken"?: string;
    /**
     * Token方式最大个数。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 服务端生成的一串字符串，作为客户端进行请求的一个标识。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
