export interface DownloadEntityRequest {
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
     * 要下载的数据元素名称数组
     */
    "EntityNames"?: string[];
}
