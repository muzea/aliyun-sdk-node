export interface UntagResourcesRequest {
    /**
     * 资源类型
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID列表，最多50个子项
     */
    "ResourceId": string[];
    /**
     * 标签键，n 的取值范围为 1, 20。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源上全部的标签。当请求中未设置 TagKey.N 时，该参数才有效。取值范围：
     * - **true**：解绑所有标签。
     * - **false**（默认值）：不解绑所有标签。
     * @example `true`
     */
    "All"?: boolean;
}
