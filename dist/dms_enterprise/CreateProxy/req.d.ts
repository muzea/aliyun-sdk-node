export interface CreateProxyRequest {
    /**
     * 实例ID，可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `183****`
     */
    "InstanceId": number;
    /**
     * 数据库账号。
     * @example `username`
     */
    "Username": string;
    /**
     * 数据库密码。
     * @example `******`
     */
    "Password": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
