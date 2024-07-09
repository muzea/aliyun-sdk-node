export interface ModifyDBClusterResourceGroupRequest {
    /**
     * 实例ID。
     * @example `am-bpxxxxx`
     */
    "DBClusterId": string;
    /**
     * 资源组id。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acxxxxx`
     */
    "NewResourceGroupId": string;
}
