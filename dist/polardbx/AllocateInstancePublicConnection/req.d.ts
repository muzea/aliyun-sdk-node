export interface AllocateInstancePublicConnectionRequest {
    /**
     * 实例名。
     * @example `pxc-**************`
     */
    "DBInstanceName": string;
    /**
     * 公网地址前缀。
     * @example `pxc-**************`
     */
    "ConnectionStringPrefix": string;
    /**
     * 公网地址端口。
     * @example `3306`
     */
    "Port": string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
