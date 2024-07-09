export interface DescribeHanaRetentionSettingRequest {
    /**
     * 备份仓库ID。
     * @example `v-000ii8t******ntrt2`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0002ys1i******wwtf`
     */
    "ClusterId": string;
    /**
     * 数据库名称。
     * @example `C4P`
     */
    "DatabaseName"?: string;
}
