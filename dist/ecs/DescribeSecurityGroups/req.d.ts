export interface DescribeSecurityGroupsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全组ID列表。一次最多支持100个安全组ID，ID之间用半角逗号（,）隔开，格式为JSON数组。
     * @example `["sg-bp67acfmxazb4p****", "sg-bp67acfmxazb4p****", "sg-bp67acfmxazb4p****",....]`
     */
    "SecurityGroupIds"?: string;
    /**
     * 安全组所在的专有网络ID。
     * @example `vpc-bp67acfmxazb4p****`
     */
    "VpcId"?: string;
    /**
     * 安全组类型。取值范围：
     * - normal：普通安全组。
     * - enterprise：企业安全组。
     * > 当不为该参数传值时，表示查询所有类型的安全组。
     * @example `normal`
     */
    "SecurityGroupType"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。
     * @example `e71d8a535bd9cc11`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。一旦设置该参数，即表示使用`MaxResults`与`NextToken`组合参数的查询方式。
     * 最大值为100。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 安全组的网络类型。取值范围：
     * - vpc：专有网络。
     * - classic：经典网络。
     * @example `vpc`
     */
    "NetworkType"?: string;
    /**
     * 安全组名称。
     * @example `SGTestName`
     */
    "SecurityGroupName"?: string;
    /**
     * 是否查询安全组的容量信息。传True时，返回值中的`EcsCount`和`AvailableInstanceAmount`有效。
     * >该参数已废弃。
     * @example `null`
     */
    "IsQueryEcsCount"?: boolean;
    /**
     * 安全组所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。您可以调用[ListResourceGroups](~~158855~~)查询资源组列表。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 安全组的标签键。
         * > 为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `testkey`
         */
        key: string;
        /**
         * 安全组的标签键。N的取值范围为1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 安全组的标签值。N的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 安全组的标签值。
         * > 为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `testvalue`
         */
        value: string;
    }[];
    /**
     * 是否只预检此次请求。取值范围：
     *
     * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
     * 默认值为false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "FuzzyQuery"?: boolean;
    /**
     * 安全组列表的页码。
     * 起始值为1。
     * 默认值为1。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为50。
     * 默认值为10。
     * > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否为托管安全组。取值范围：
     * - true：是托管安全组。
     * - false：不是托管安全组。
     * @example `false`
     */
    "ServiceManaged"?: boolean;
}
