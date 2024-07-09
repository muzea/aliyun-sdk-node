export interface ListAggregateResourcesByAdvancedSearchRequest {
    /**
     * SQL查询语句。
     * @example `SELECT ResourceId, ResourceName WHERE Tags.Kvpair='business:online'`
     */
    "Sql": string;
    /**
     * 账号组ID。
     * @example `ca-4b05626622af000c****`
     */
    "AggregatorId": string;
}
