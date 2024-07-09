export interface DisableHanaBackupPlanRequest {
    /**
     * 备份仓库ID。
     * @example `v-000f9z******vilrr`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0003tu******y5oc`
     */
    "ClusterId": string;
    /**
     * 备份计划ID。
     * @example `pl-0006o11ectqr650ceoct`
     */
    "PlanId": string;
    /**
     * 资源组ID。
     * @example `rg-acfm3erpwweavki`
     */
    "ResourceGroupId"?: string;
}
