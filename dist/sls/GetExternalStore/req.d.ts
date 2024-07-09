export interface GetExternalStoreRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 外部存储名称。
     * @example `rds_store`
     */
    "externalStoreName": string;
}
