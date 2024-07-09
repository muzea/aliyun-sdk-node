export interface ReleaseInstancePublicConnectionRequest {
    /**
     * 实例名称。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 实例连接串。
     * @example `pxc-hzjasdyuoo.polarx.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
