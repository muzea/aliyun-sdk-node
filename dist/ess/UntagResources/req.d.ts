export interface UntagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，目前仅支持伸缩组。取值：scalinggroup。
     * @example `scalinggroup`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上全部的标签。当请求参数中未设置`TagKeys`时，该参数才有效。取值范围：
     * - true：解绑资源上的全部标签。
     * - false：不解绑资源上的全部标签。
     * 默认值：false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID。
     */
    "ResourceIds": string[];
    /**
     * 资源的标签键。
     */
    "TagKeys"?: string[];
}
