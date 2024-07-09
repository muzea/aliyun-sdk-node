export interface DescribeHanaBackupSettingRequest {
    /**
     * 备份仓库ID。
     * @example `v-000css******za5uyqr`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-00068btz******oku`
     */
    "ClusterId": string;
    /**
     * 数据库名称。
     * @example `SYSTEMDB`
     */
    "DatabaseName"?: string;
}
