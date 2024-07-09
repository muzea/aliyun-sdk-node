export interface UpdateDBInstanceSSLRequest {
    /**
     * 是否开启SSL。
     * @example `true`
     */
    "EnableSSL": boolean;
    /**
     * 证书绑定域名。
     * @example `pxc-hzrqjarxdocd4t.polarx.rds.aliyuncs.com`
     */
    "CertCommonName"?: string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
