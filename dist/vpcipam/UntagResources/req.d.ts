export interface UntagResourcesRequest {
    /**
     * 资源的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId": string[];
    /**
     * 资源类型。取值：
     * - **IPAM**：表示资源类型为IPAM。
     * - **IPAMSCOPE**：表示资源类型为IPAM作用范围。
     * - **IPAMPOOL**：表示资源类型为IPAM地址池。
     * @example `IPAM`
     */
    "ResourceType": string;
    /**
     * 要解绑的标签键列表。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源的所有标签。取值：
     * - **true**：解除资源的所有标签。
     * - **false**（默认值）：不解除资源的所有标签。
     * @example `false`
     */
    "All"?: boolean;
}
