export interface RefreshDBClusterStorageUsageRequest {
    /**
     * 设置同步时间，取值范围：
     * - **true**: 实时同步
     * - **false**: T + 1
     * @example `true`
     */
    "SyncRealTime"?: boolean;
}
