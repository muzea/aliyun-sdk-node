export interface DeleteInstanceRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 待删除的实例连接地址，可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `xxx.mysql.rds.aliyuncs.com`
     */
    "Host": string;
    /**
     * 待删除的实例链接端口，可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `3306`
     */
    "Port": number;
    /**
     * 待删除的实例SID，可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `testSid`
     */
    "Sid"?: string;
}
