export interface StartHanaDatabaseAsyncRequest {
    /**
     * 备份仓库ID。
     * @example `v-0000hrh******vhr3i`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000a9ipe******sme`
     */
    "ClusterId"?: string;
    /**
     * 数据库名称。
     * @example `HXE`
     */
    "DatabaseName": string;
}
