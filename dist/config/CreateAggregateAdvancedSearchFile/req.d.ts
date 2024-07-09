export interface CreateAggregateAdvancedSearchFileRequest {
    /**
     * 高级搜索SQL语句。
     * @example `SELECT * WHERE ResourceType = 'ACS::ECS::Instance'`
     */
    "Sql": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-edd3626622af00b3****`
     */
    "AggregatorId": string;
}
