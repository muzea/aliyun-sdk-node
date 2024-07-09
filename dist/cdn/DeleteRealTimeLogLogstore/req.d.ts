export interface DeleteRealTimeLogLogstoreRequest {
    /**
     * 实时投递SLS的ProjectName。
     * @example `ProjectName`
     */
    "Project": string;
    /**
     * 实时投递SLS的LogStoreName。
     * @example `LogstoreName`
     */
    "Logstore": string;
    /**
     * 实时投递SLS的地域，详情请参见[实时日志投递用户Region列表](~~144883~~)。
     * @example `cn-shanghai`
     */
    "Region": string;
}
