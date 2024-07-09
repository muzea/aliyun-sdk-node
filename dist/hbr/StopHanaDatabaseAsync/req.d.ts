export interface StopHanaDatabaseAsyncRequest {
    /**
     * 备份仓库ID。
     * @example `v-0006wkn******gzkn`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000dw******45ijer`
     */
    "ClusterId"?: string;
    /**
     * 数据库名称。
     * @example `BWP`
     */
    "DatabaseName": string;
}
