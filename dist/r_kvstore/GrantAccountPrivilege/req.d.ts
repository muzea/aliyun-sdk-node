export interface GrantAccountPrivilegeRequest {
    /**
     * 账号所属实例的ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 账号名，您可以调用[DescribeAccounts](~~95802~~)获取。
     * @example `demoaccount`
     */
    "AccountName": string;
    /**
     * 账号权限，取值：
     * * RoleReadOnly：只读权限。
     * * RoleReadWrite：读写权限，默认值。
     * @example `RoleReadWrite`
     */
    "AccountPrivilege": string;
}
