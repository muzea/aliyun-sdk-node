export interface UpdateEntityRequest {
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
     * 要更新的元素数组
     */
    "EntityItems": {
        /**
         * 实体元素名称
         * @example `s1`
         */
        EntityName: string;
        /**
         * 要更新的元素的内容
         */
        EntityData: any;
    }[];
}
