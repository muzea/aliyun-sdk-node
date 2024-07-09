export interface DescribeManagedInstancesRequest {
    /**
     * 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。
     * 您可以调用[DescribeRegions](~~25609~~)查看地域对应的ID等信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 托管实例的操作系统类型，取值范围：
     * - windows。
     * - linux。
     * - FreeBSD。
     * @example `windows`
     */
    "OsType"?: string;
    /**
     * 托管实例的内网IP或公网IP。
     * @example `192.168.**.**`
     */
    "InstanceIp"?: string;
    /**
     * 激活码ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F7494****`
     */
    "ActivationId"?: string;
    /**
     * 托管实例的名称。
     * @example `my-webapp-server`
     */
    "InstanceName"?: string;
    /**
     * 托管实例列表的页码。
     * 起始值为1。
     * 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 托管实例的ID。N的取值范围为1~50。
     * @example `mi-hz018jrc1o0****`
     */
    "InstanceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 托管实例的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 托管实例的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 分页查询时每页的最大条目数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 托管实例所属的资源组ID。
     * @example `rg-123******`
     */
    "ResourceGroupId"?: string;
}
