export interface GetInstanceRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `2***`
     */
    "Tid"?: number;
    /**
     * 实例连接地址，可通过调用接口[ListInstances](~~141936~~)获取该参数的值。
     * @example `172.17.XXX.XXX`
     */
    "Host": string;
    /**
     * 实例连接端口，可通过调用接口[ListInstances](~~141936~~)获取该参数的值。
     * @example `5432`
     */
    "Port": number;
    /**
     * 实例Sid，可调用接口[ListInstances](~~141936~~)获取该参数的值。
     * @example `test`
     */
    "Sid"?: string;
}
