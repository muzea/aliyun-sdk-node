export interface DeleteExternalStoreRequest {
    /**
     * A short description of struct
     */
    "project": string;
    /**
     * 外部存储名称。
     * @example `rds_store`
     */
    "externalStoreName": string;
}
