export interface ModifyDBInstanceConnectionStringRequest {
    /**
     * 地域Id
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例Id
     * @example `pxc-unrf5ssig0ecg8`
     */
    "DBInstanceName": string;
    /**
     * 新的地址前缀
     * @example `test2`
     */
    "NewPrefix": string;
    /**
     * 地址原链接信息
     * @example `pxc-unrf5ssig0ecg8.polarx.huhehaote.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 新的地址端口
     * @example `3300`
     */
    "NewPort": string;
}
