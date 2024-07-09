export interface UnTagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源类型。目前仅支持cluster，即E-HPC集群。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多50个。
     */
    "ResourceId": string[];
    /**
     * 资源的标签键，最多20个。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源上全部的标签。当请求中未设置TagKey.N时，该参数才有效。取值范围：
     * - true
     * - false
     * 默认值：false。
     * @example `false`
     */
    "All"?: boolean;
}
