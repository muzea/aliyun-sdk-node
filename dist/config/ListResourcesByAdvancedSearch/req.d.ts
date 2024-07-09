export interface ListResourcesByAdvancedSearchRequest {
    /**
     * SQL查询语句。
     * @example `SELECT ResourceId, ResourceName WHERE Tags.Kvpair='business:online'`
     */
    "Sql": string;
}
