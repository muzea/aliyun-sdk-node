export interface QueryClusterSpecificationRequest {
    /**
     * 网络类型，取值如下：
     * - slb
     * - eni
     * @example `slb`
     */
    "ConnectType"?: string;
    /**
     * 待开通的MSE集群版本。
     * - mse_pro：表示专业版。
     * - mse_dev：表示开发版。
     * @example `mse_pro`
     */
    "MseVersion"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
