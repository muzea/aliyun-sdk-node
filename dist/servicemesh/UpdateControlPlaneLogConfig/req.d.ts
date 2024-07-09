export interface UpdateControlPlaneLogConfigRequest {
    /**
     * 服务网格ID。
     * @example `c20667db760fe4ee6910220136624****`
     */
    "ServiceMeshId": string;
    /**
     * 是否采集控制面日志到SLS。
     * @example `false`
     */
    "Enabled": boolean;
    /**
     * 自定义控制面日志采集目标SLS Project名称。
     * @example `aia-asm-deva-sh`
     */
    "Project"?: string;
    /**
     * 采集日志过期时间。
     * @example `30`
     */
    "LogTTLInDay"?: number;
}
