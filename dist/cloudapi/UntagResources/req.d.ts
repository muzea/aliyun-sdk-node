export interface UntagResourcesRequest {
    /**
     * 资源类型定义，目前分组，插件，应用接入了标签，API相关操作基于分组的标签：
     * - **apiGroup**
     * - **plugin**
     * - **app**
     * @example `apiGroup`
     */
    "ResourceType": string;
    /**
     * 是否全部删除。只针对**TagKey.N**为空时有效。取值范围：
     * - **true**
     * - **false**：默认值
     * @example `true`
     */
    "All"?: boolean;
    /**
     * 资源ID。
     * n的取值范围为`[1, 50]`
     * @example `285bb759342649a1b70c2093a772e087`
     */
    "ResourceId": string[];
    /**
     * 标签键。
     * n 的取值范围为 `[1, 20]`
     * @example `env`
     */
    "TagKey"?: string[];
}
