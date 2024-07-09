export interface EnableHanaBackupPlanRequest {
    /**
     * 备份仓库ID。
     * @example `v-00030j3c******sn`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0001zfcn******0pr3`
     */
    "ClusterId": string;
    /**
     * 备份计划ID。
     * @example `plan-*********************`
     */
    "PlanId": string;
    /**
     * 资源组ID。
     * @example `rg-acfm4ebtpkzx7zy`
     */
    "ResourceGroupId"?: string;
}
