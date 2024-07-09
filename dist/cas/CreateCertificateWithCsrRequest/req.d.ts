export interface CreateCertificateWithCsrRequestRequest {
    /**
     * 已有的CSR文件的内容。
     * CSR文件的密钥类型必须是RSA、ECC算法，且RSA算法的密钥长度必须大于等于2048。关于CSR文件的制作方法，请参见[如何制作CSR文件](~~42218~~)。  <props="china">您也可以在[数字证书管理服务控制台](https://yundunnext.console.aliyun.com/?&p=cas)创建CSR，具体操作，请参见[创建CSR](~~313297~~)。  </props>
     * CSR（Certificate Signing Request）是证书签名请求文件，包含了您的服务器信息和公司信息。申请证书时需要将您证书的CSR文件提交给CA认证中心审核，CA中心对CSR文件进行根证书私钥签名后，会生成证书公钥文件（即签发给您的SSL证书）。
     * > CSR中的**CN**字段表示证书绑定的域名。
     * @example `-----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----`
     */
    "Csr": string;
    /**
     * 要申请的证书规格。取值：
     * - **digicert-free-1-free**（默认）：表示DigiCert DV单域名证书（3个月免费证书，仅中国站）。
     * - **symantec-free-1-free**：表示DigiCert DV单域名证书（1年免费证书，仅中国站）。
     * - **symantec-dv-1-starter**：表示DigiCert DV通配符域名证书。
     * - **geotrust-dv-1-starter**：表示GeoTrust DV单域名证书。
     * - **geotrust-dv-w-starter**：表示GeoTrust DV通配符域名证书。
     * - **globalsign-dv-1-personal**：表示GlobalSign DV单域名证书。
     * - **globalsign-dv-w-advanced**：表示GlobalSign DV通配符域名证书。
     * @example `digicert-free-1-free`
     */
    "ProductCode"?: string;
    /**
     * 申请联系人的姓名。
     * @example `Tom`
     */
    "Username": string;
    /**
     * 申请联系人的手机号码。
     * @example `1390000****`
     */
    "Phone": string;
    /**
     * 申请联系人的邮箱地址。
     * @example `username@example.com`
     */
    "Email": string;
    /**
     * 域名所有权的验证方式。取值：
     * - **DNS**：DNS验证。通过在域名的DNS管理平台为域名添加一条TXT类型的DNS记录，验证域名的所有权。您需要域名解析的管理权限，才可以完成验证。
     * - **FILE**：文件验证。通过在域名服务器上创建指定的文件，验证域名的所有权。您需要域名服务器的管理员权限，才可以完成验证。
     * 关于两种验证方式的更多信息，请参见[如何配置域名授权验证？](~~48016~~)。
     * @example `DNS`
     */
    "ValidateType": string;
}
