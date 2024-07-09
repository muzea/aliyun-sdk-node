export interface QueryConfigRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 预留字段。
     * @example `null`
     */
    "ConfigType"?: string;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-st2212****`
     */
    "InstanceId"?: string;
    /**
     * 是否需要运行时配置。
     * @example `true`
     */
    "NeedRunningConf"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
