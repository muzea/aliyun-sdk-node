export interface DescribeDedicatedHostClustersRequest {
    /**
     * >该参数暂未上线，不支持使用。
     * @example `null`
     */
    "Status"?: string;
    /**
     * >该参数暂未上线，不支持使用。
     * @example `null`
     */
    "LockReason"?: string;
    /**
     * 专有宿主机集群要加入的资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 专有宿主机集群的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 专有宿主机集群的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有宿主机集群所在的可用区ID。您可以调用[DescribeZones](~~25610~~)查看阿里云地域下的可用区。
     * @example `cn-hangzhou-f`
     */
    "ZoneId"?: string;
    /**
     * 专有宿主机集群ID列表。取值可以由多个专有宿主机集群ID组成一个JSON数组，格式为`["dc-xxxxxxxxx", "dc-yyyyyyyyy", … ,"dc-zzzzzzzzz"]`。支持最多100个ID，用半角逗号字符隔开。
     * @example `["dc-bp12wlf6am0vz9v2****", "dc-bp12wlf6am0vz9v3****"]`
     */
    "DedicatedHostClusterIds"?: string;
    /**
     * 专有宿主机集群名称。
     * @example `myDDHCluster`
     */
    "DedicatedHostClusterName"?: string;
    /**
     * 专有宿主机集群状态列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `5`
     */
    "PageSize"?: number;
}
