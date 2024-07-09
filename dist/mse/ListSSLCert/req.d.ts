export interface ListSSLCertRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-3f97e2989c344f35ab3fd62b19f1****`
     */
    "GatewayUniqueId": string;
    /**
     * 按证书名称模糊搜索
     * @example `certabc`
     */
    "CertName"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
