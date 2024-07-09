export interface CreateAdvancedSearchFileRequest {
    /**
     * 资源高级搜索SQL语句。
     * @example `SELECT * WHERE ResourceType = 'ACS::ECS::Instance'`
     */
    "Sql": string;
}
