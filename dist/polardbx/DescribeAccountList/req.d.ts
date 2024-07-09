export interface DescribeAccountListRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 账号名称，需要查询某个账号时输入。
     * @example `testaccount`
     */
    "AccountName"?: string;
    /**
     * 账号类型，需要查询某类账号时输入，null返回所有账号。
     * - 开启三权分立前：0代表普通账号，1代表高权限账号；
     * - 开启三权分立后，0代表普通账号，2代表系统管理员账号，3代表安全管理员账号，4代表审计管理员账号。
     * @example `0`
     */
    "AccountType"?: string;
}
