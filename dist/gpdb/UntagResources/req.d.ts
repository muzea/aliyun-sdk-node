export interface UntagResourcesRequest {
    /**
     * 地域ID，您可通过接口[DescribeRegions](~~86912~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值范围：
     * - `instance`：预留模式实例。
     * - `ALIYUN::GPDB::INSTANCE`：弹性模式实例。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否解绑实例上全部的标签。当请求中未设置TagKey.N时，该参数才有效。取值范围：
     * - true
     * - false
     * 默认值：false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 实例ID。N的取值范围：1~50
     */
    "ResourceId": string[];
    /**
     * 资源的标签键。N的取值范围：1~20
     */
    "TagKey"?: string[];
}
