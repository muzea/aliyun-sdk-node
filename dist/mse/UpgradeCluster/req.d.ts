export interface UpgradeClusterRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-nif1w51wi0c`
     */
    "InstanceId": string;
    /**
     * 升级目标版本
     * @example `1.2.1`
     */
    "UpgradeVersion": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
