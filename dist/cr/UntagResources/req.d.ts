export interface UntagResourcesRequest {
    /**
     * 资源类型。当前支持实例 Instance 资源。
     * @example `Instance`
     */
    "ResourceType": string;
    /**
     * 资源 ID。最多支持添加 20 个资源。
     */
    "ResourceId"?: string[];
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签键。N的取值范围为1~20。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源上全部的标签，取值：
     * - **true**：解绑资源上的全部标签。
     * - **false**：不解绑全部标签。
     * > 如果同时设置了**TagKey.n**和本参数，则本参数不生效。
     * @example `true`
     */
    "All"?: boolean;
}
