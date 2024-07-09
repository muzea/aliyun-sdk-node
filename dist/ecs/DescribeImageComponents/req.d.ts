export interface DescribeImageComponentsRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
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
         * 标签键。N的取值范围：1~20
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。N的取值范围：1~20
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 镜像组件名称。仅支持精确查找。
     * @example `testComponent`
     */
    "Name"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。取值范围：1~500
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 镜像组件类型。取值范围：
     * - SELF：您创建的自定义镜像组件。
     * - ALIYUN：阿里云提供的系统组件。
     * @example `SELF`
     */
    "Owner"?: string;
    /**
     * 待查询的镜像组件ID。N取值范围：1~20
     * @example `ic-bp67acfmxazb4p****`
     */
    "ImageComponentId"?: string[];
}
