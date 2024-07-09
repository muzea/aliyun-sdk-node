export interface CreateCertificateRequest {
    /**
     * 证书主体（拥有者）。
     * 按照[RFC 2253](https://tools.ietf.org/html/rfc2253?spm=a2c4g.11186623.2.13.265f1a1cGFCn3Q)定义，采用DN（Distinguished Names）标识。DN由一系列RDN（Relative Distinguished Names）组成。
     * RDN是一组键值对，多个RDN之间用英文逗号（,）隔开，格式为：`attribute1=value1,attribute2=value2`。
     * 证书主体字段含义如下：
     * - CN（必选）：名称。证书使用主体名称。
     * - C（必选）：国家/地区。使用[ISO 3166-1](https://www.iso.org/obp/ui/#search/code/)的二位国家代码。例如：CN代表中国。
     * - O（必选）：公司名称。企业、单位、组织或机构的法定名称。
     * - OU（必选）：部门名称。
     * - ST（可选）：省/市。省、直辖市、自治区或特别行政区名称。
     * - L（可选）：城市名称。
     * @example `CN=userName,OU=kms,O=aliyun,C=CN`
     */
    "Subject": string;
    /**
     * 证书主体别名。
     * 支持域名列表，最多支持10个域名。
     * @example `["test1.example.com","test2.example.com"]`
     */
    "SubjectAlternativeNames"?: any;
    /**
     * 密钥类型，取值：
     * - RSA_2048
     * - EC_P256
     * - EC_SM2
     * @example `RSA_2048`
     */
    "KeySpec": string;
    /**
     * 证书私钥是否需要导出使用。取值：
     * - true（默认值）：证书私钥需要导出使用。
     * - false：证书私钥不需要导出使用。建议选择否，以便使用更高安全级别的密钥保护。
     * @example `true`
     */
    "ExportablePrivateKey"?: boolean;
}
