export interface CopyPublicEntityRequest {
    /**
     * 数据集名称
     * @example `TestDataset`
     */
    "Dataset": string;
    /**
     * 表格名称
     * @example `sample`
     */
    "EntityType": string;
    /**
     * 要拷贝到的工作空间
     * @example `test-workspace`
     */
    "Workspace": string;
}
