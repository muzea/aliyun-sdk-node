export interface ExecuteOperationSyncRequest {
    /**
     * 云速搭应用ID
     * @example `BE68D71ZY5YYIU9R`
     */
    "ApplicationId"?: string;
    /**
     * 资源类型，如果需要修改 dds 的相关参数请填写：dds。
     * @example `dds`
     */
    "ServiceType": string;
    /**
     * 本次操作类型
     * @example `rename`
     */
    "Operation": string;
    /**
     * 操作相关参数，根据不同的Operation值，输入对应的参数
     */
    "Attributes"?: any;
    /**
     * 资源组ID，用于资源组权限校验
     * @example `rg-acfmyjt3c5om3hi`
     */
    "ResourceGroupId"?: string;
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken"?: string;
}
