export interface GetStorageListRequest {
    /**
     * 应用Id
     * @example `app-****`
     */
    "AppId"?: string;
    /**
     * 存储类型
     * @example `vod_oss_bucket`
     */
    "StorageType"?: string;
    /**
     * OSS存储状态
     * @example `Normal`
     */
    "Status"?: string;
}
