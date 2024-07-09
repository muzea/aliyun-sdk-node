export interface UpdateEntityItemsRequest {
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
     * 实体表格数据
     */
    "EntityItems": {
        /**
         * 实体元素名称
         * @example `s1`
         */
        EntityName: string;
        /**
         * 数据key-value
         */
        EntityData: any;
    }[];
}
