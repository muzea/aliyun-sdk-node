export interface SetVsDomainCertificateRequest {
    /**
     * 指定证书所属加速域名。
     * > 域名需要属于HTTPS加速类型。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。
     * - **off**（默认值）：不启用。
     * @example `on`
     */
    "SSLProtocol": string;
    /**
     * 证书名称。
     * @example `Cert-77****7`
     */
    "CertName"?: string;
    /**
     * 证书类型。
     * - upload（上传证书）
     * - cas（云盾证书）
     * - free（免费证书）
     * @example `free`
     */
    "CertType"?: string;
    /**
     * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
     * @example `328uiuii28****82dsada81`
     */
    "SSLPub"?: string;
    /**
     * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `xxxxxxx`
     */
    "SSLPri"?: string;
    /**
     * 地域。
     * @example `cn-qingdao`
     */
    "Region"?: string;
    /**
     * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
     * @example `1`
     */
    "ForceSet"?: string;
}
