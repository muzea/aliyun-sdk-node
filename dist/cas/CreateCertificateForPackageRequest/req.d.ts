export interface CreateCertificateForPackageRequestRequest {
    /**
     * 您使用OpenSSL或Keytool工具为域名手动生成的CSR文件的内容。CSR文件的密钥类型必须是RSA、ECC算法，且RSA算法的密钥长度必须大于等于2048。关于CSR文件的制作方法，请参见[创建CSR](~~313297~~)。如果不设置该参数，表示由SSL证书服务自动为您创建CSR。
     * CSR（Certificate Signing Request）是证书签名请求文件，包含了您的服务器信息和公司信息。申请证书时需要将您证书的CSR文件提交给CA认证中心审核，CA中心对CSR文件进行根证书私钥签名后，会生成证书公钥文件（即签发给您的SSL证书）。
     * ><notice>
     * CSR中的**CN**字段表示证书绑定的域名。您设置CSR参数时，该字段为必填字段。
     * ></notice>
     * @example `-----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----`
     */
    "Csr"?: string;
    /**
     * 要申请的证书规格。取值：
     * - **digicert-free-1-free**（默认）：表示DigiCert DV单域名证书（3个月免费证书，仅中国站）。
     * - **symantec-free-1-free**：表示DigiCert DV免费单域名证书（1年期免费证书，仅中国站）。
     * - **symantec-dv-1-starter**：表示DigiCert DV通配符域名证书。
     * - **symantec-ov-1-personal**：表示DigiCert OV单域名证书。
     * - **symantec-ov-w-personal**：表示DigiCert OV通配符域名证书。
     * - **geotrust-dv-1-starter**：表示GeoTrust DV单域名证书。
     * - **geotrust-dv-w-starter**：表示GeoTrust DV通配符域名证书。
     * - **geotrust-ov-1-personal**：表示GeoTrust OV单域名证书。
     * - **geotrust-ov-w-personal**：表示GeoTrust OV通配符域名证书。
     * - **globalsign-dv-1-personal**：表示GlobalSign DV单域名证书。
     * - **globalsign-dv-w-advanced**：表示GlobalSign DV通配符域名证书。
     * - **globalsign-ov-1-personal**：表示GlobalSign OV单域名证书。
     * - **globalsign-ov-w-advanced**：表示GlobalSign OV通配符域名证书。
     * - **cfca-ov-1-personal**：表示CFCA OV单域名证书（仅中国站）。
     * - **cfca-ev-w-advanced**：表示CFCA OV通配符域名证书（仅中国站）。
     * @example `digicert-free-1-free`
     */
    "ProductCode"?: string;
    /**
     * 申请联系人的姓名。
     * 如果不设置该参数，表示从**信息管理**模块中选择使用最新添加的一条联系人信息。关于在**信息管理**模块中添加联系人的具体操作，请参见[管理联系人](~~198262~~)。
     * @example `Tom`
     */
    "Username"?: string;
    /**
     * 申请联系人的手机号码。后续CA中心工作人员可能会通过该电话联系您，验证您的证书申请信息。
     * 如果不设置该参数，表示从**信息管理**模块中选择使用最新添加的一条联系人信息。关于在**信息管理**模块中添加联系人的具体操作，请参见[管理联系人](~~198262~~)。
     * @example `1390000****`
     */
    "Phone"?: string;
    /**
     * 申请联系人的邮箱地址。CA中心收到您的证书申请后，将向该邮箱发送一封证书申请验证邮件。您需要登录该邮箱，查收相关邮件，并按照邮件提示完成验证。
     * 如果不设置该参数，表示从**信息管理**模块中选择使用最新添加的一条联系人信息。关于在**信息管理**模块中添加联系人的具体操作，请参见[管理联系人](~~198262~~)。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 证书要绑定的域名。具体要求如下：
     * - 支持设置单域名或者通配符域名（例如，`*.aliyundoc.com`）。
     * - 支持设置多个域名。多个域名间使用英文逗号（,）分隔。最多可以设置5个域名。
     * - 如果设置多个域名，则多个域名只能全部是单域名或者通配符域名，不允许同时包含单域名和通配符域名。
     * ><notice>
     * 证书绑定多个域名时，该参数为必填项。该参数与**Csr**参数不允许同时为空。如果您同时设置了该参数和**Csr**参数，则取**Csr**中的**CN**字段值作为证书绑定的域名。
     * ></notice>
     * @example `aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 证书申请公司的名称。
     * > 该参数仅适用于申请OV证书。申请OV证书时，您必须先在[数字证书管理服务控制台](https://yundun.console.aliyun.com/?p=cas#/)的**信息管理**模块添加公司信息，具体操作，请参见[管理公司信息](~~198289~~)。申请DV证书时，无需添加公司信息。
     * 申请OV证书时，如果您在此处设置了公司名称，则表示使用**信息管理**模块中对应的公司信息；如果您没有设置该参数，则表示从**信息管理**模块中选择使用最新添加的一条公司信息。
     * @example `某公司`
     */
    "CompanyName"?: string;
    /**
     * 域名所有权的验证方式。取值：
     * - **DNS**：DNS验证。通过在域名的DNS管理平台为域名添加一条TXT类型的DNS记录，验证域名的所有权。您需要域名解析的管理权限，才可以完成验证。
     * - **FILE**：文件验证。通过在域名服务器上创建指定的文件，验证域名的所有权。您需要域名服务器的管理员权限，才可以完成验证。
     * 关于两种验证方式的更多信息，请参见[如何配置域名授权验证？](~~48016~~)。
     * @example `DNS`
     */
    "ValidateType"?: string;
}
