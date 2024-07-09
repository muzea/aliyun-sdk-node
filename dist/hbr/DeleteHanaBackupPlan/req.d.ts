export interface DeleteHanaBackupPlanRequest {
    /**
     * 备份仓库ID。
     * @example `v-0007o******1ssno`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000br3******0ooy2`
     */
    "ClusterId": string;
    /**
     * 备份计划ID。
     * @example `pl-00035lc8pwp1azdf3qku`
     */
    "PlanId": string;
    /**
     * 资源组ID。
     * @example `rg-acfm4ebtpkzx7zy`
     */
    "ResourceGroupId"?: string;
}
