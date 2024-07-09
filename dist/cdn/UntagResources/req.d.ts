export interface UntagResourcesRequest {
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 删除所有标签。取值：
     * - **true**：是。
     * - **false**：否。
     * 默认取值为**false**。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表。列表元素数量最多50个。
     * @example `example.com`
     */
    "ResourceId": string[];
    /**
     * 标签键列表。列表元素数量最大20个。
     * @example `env`
     */
    "TagKey"?: string[];
}
