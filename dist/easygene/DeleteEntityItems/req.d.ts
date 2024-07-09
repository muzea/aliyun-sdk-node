export interface DeleteEntityItemsRequest {
    /**
     * 工作空间
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 实体类型
     * @example `sample`
     */
    "EntityType": string;
    /**
     * 要删除的元素名称数组
     */
    "EntityNames": string[];
}
