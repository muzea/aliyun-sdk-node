export interface DescribeElasticityAssurancesRequest {
    /**
     * 弹性保障服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。N表示可以设置多个标签键进行过滤，N的取值范围为1~20。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](~~110425~~)接口进行查询。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。N表示可以设置多个标签键进行过滤，N的取值范围为1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 分页查询时每页行数。
     * 最大值为100。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 弹性保障服务查询起始标志。由上一次的请求结果中获取。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 弹性保障服务ID列表。取值可以由多个ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["eap-bp67acfmxazb4****", "eap-bp67acfmxazb5****"]`
     */
    "PrivatePoolOptions.Ids"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Platform"?: string;
    /**
     * 实例规格。
     * @example `ecs.c6.large`
     */
    "InstanceType"?: string;
    /**
     * 弹性保障服务所属地域下的可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 实例的计费方式。取值：PostPaid，目前仅支持按量付费。
     * 默认值为PostPaid。
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 弹性保障服务的状态。取值范围：
     * - All：所有状态。
     * - Preparing：准备中。
     * - Prepared：待生效。
     * - Active：生效中。
     * - Released：已释放。
     * 默认值为Active。
     * @example `Active`
     */
    "Status"?: string;
}
