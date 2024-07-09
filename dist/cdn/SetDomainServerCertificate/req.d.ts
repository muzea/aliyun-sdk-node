export interface SetDomainServerCertificateRequest {
    /**
     * 指定证书所属加速域名，需属于HTTPS加速类型。
     * 仅支持单个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 证书名称，仅支持传单个名称。
     * @example `myCert1`
     */
    "CertName"?: string;
    /**
     * 证书类型。取值：
     * - **upload**：上传证书。
     * - **cas**：云盾证书。
     * > 当证书类型为**cas**时，**PrivateKey**无需传参。
     * @example `cas`
     */
    "CertType"?: string;
    /**
     * HTTPS证书是否启用。取值：
     * - **on**：启用。
     * - **off**（默认）：不启用。
     * @example `on`
     */
    "ServerCertificateStatus": string;
    /**
     * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。可通过以下两种方法获取安全证书内容：
     * - 方法一：调用[DescribeDomainCertificateInfo](~~91182~~)查询加速域名对应的证书信息，取返回数据中的ServerCertificate证书公钥的值。
     * - 方法二：先调用[DescribeCdnCertificateList](~~91181~~)查询加速域名对应的证书列表，取返回数据中的CertName证书名称的值；然后以CertName证书名称为请求参数，通过调用[DescribeCdnCertificateDetail](~~131905~~)来获取证书详细信，取返回数据中的Cert证书公钥值。
     * @example `----BEGIN CERTIFICATE----- MIIFz****-----END CERTIFICATE-----`
     */
    "ServerCertificate"?: string;
    /**
     * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
     * @example `----BEGIN RSA PRIVATE KEY-----QswCQ****----END RSA PRIVATE KEY-----`
     */
    "PrivateKey"?: string;
    /**
     * 设置为1时，忽略证书名称重复的校验，覆盖原有同名证书信息。
     * @example `1`
     */
    "ForceSet"?: string;
}
