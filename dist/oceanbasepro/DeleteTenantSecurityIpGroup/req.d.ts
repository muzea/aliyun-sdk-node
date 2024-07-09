export interface DeleteTenantSecurityIpGroupRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId": string;
    /**
     * 安全白名单分组的组名。
     * 由小写英文字符开头，由小写英文字符或者数字结尾，只能包含小写英文字符，数字和下划线，长度在 2-32 个字符之间。
     * @example `paytest`
     */
    "SecurityIpGroupName": string;
}
