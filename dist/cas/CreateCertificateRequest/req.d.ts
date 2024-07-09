export interface CreateCertificateRequestRequest {
    /**
     * 要申请的证书规格。取值：
     * - **digicert-free-1-free**（默认）：表示DigiCert DV单域名证书（3个月免费证书）。
     * - **symantec-free-1-free**：表示DigiCert DV单域名证书（1年期免费证书，仅中国站）。
     * - **symantec-dv-1-starter**：表示DigiCert DV通配符域名证书。
     * - **geotrust-dv-1-starter**：表示GeoTrust DV单域名证书。
     * - **geotrust-dv-w-starter**：表示GeoTrust DV通配符域名证书。
     * - **globalsign-dv-1-personal**：表示GlobalSign DV单域名证书。
     * - **globalsign-dv-w-advanced**：表示GlobalSign DV通配符域名证书。
     * @example `symantec-dv-1-starter`
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
     * 证书要绑定的域名。仅支持设置一个域名。
     * > 该域名必须与您要申请的证书规格（通过**ProductCode**参数指定）匹配。申请单域名证书时，此处必须设置一个单域名；申请通配符域名证书时，此处必须设置一个通配符域名（例如，`*.aliyundoc.com`）。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 域名所有权的验证方式。取值：
     * - **DNS**：DNS验证。通过在域名的DNS管理平台为域名添加一条TXT类型的DNS记录，验证域名的所有权。您需要域名解析的管理权限，才可以完成验证。
     * - **FILE**：文件验证。通过在域名服务器上创建指定的文件，验证域名的所有权。您需要域名服务器的管理员权限，才可以完成验证。
     * 关于两种验证方式的更多信息，请参见[如何配置域名授权验证？](~~48016~~)。
     * @example `DNS`
     */
    "ValidateType": string;
}
