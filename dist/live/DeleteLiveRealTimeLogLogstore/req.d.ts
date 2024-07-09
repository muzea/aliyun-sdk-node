export interface DeleteLiveRealTimeLogLogstoreRequest {
    /**
     * 实时投递SLS的ProjectName。
     * @example `project_example`
     */
    "Project": string;
    /**
     * 实时投递SLS的LogStoreName。
     * @example `logstore_example`
     */
    "Logstore": string;
    /**
     * 实时投递SLS的Region。
     * @example `cn-hangzhou`
     */
    "Region": string;
}
