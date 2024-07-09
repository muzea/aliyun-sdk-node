export interface RenewCertificateOrderForPackageRequestRequest {
    /**
     * 要续费的证书申请订单的ID。
     * > 证书订单ID一般是通过调用[CreateCertificateForPackageRequest](~~455296~~)、[CreateCertificateRequest](~~455292~~)或[CreateCertificateWithCsrRequest](~~455801~~)接口返回的证书申请订单ID（即**OrderId**）。此ID可通过调用[ListUserCertificateOrder](~~455804~~)获取。
     * @example `123451222`
     */
    "OrderId": number;
    /**
     * 您使用OpenSSL或Keytool工具为域名手动生成的CSR文件的内容。CSR文件的密钥类型必须是RSA、ECC算法，且RSA算法的密钥长度必须大于等于2048。关于CSR文件的制作方法，请参见[如何制作CSR文件](~~42218~~)。
     * 如果不设置该参数，表示使用待续费证书申请订单中的域名，由SSL证书服务自动为您生成新的CSR。
     * CSR（Certificate Signing Request）是证书签名请求文件，包含了您的服务器信息和公司信息。申请证书时需要将您证书的CSR文件提交给CA认证中心审核，CA中心对CSR文件进行根证书私钥签名后，会生成证书公钥文件（即签发给您的SSL证书）。
     * > CSR中的**CN**字段表示证书绑定的域名。
     * @example `-----BEGIN CERTIFICATE REQUEST----- MIIC1TCCAb0CAQAwgY8xCzAJBgNVBAYTAkNOMRIwEAYDVQQIDAlHdWFuZ3pob3Ux ETAPBgNVBAcMCFNoZW56aGVuMQ8wDQYDVQQKDAZDaGFjdW8xEDAOBgNVBAsMB0lU IERlcHQxFzAVBgNVBAMMDnd3dy5jaGFjdW8ubmV0MR0wGwYJKoZIhvcNAQkBFg44 MjkyNjY5QHFxLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALo7 atRvQf9tKo1NJ/MQqzHvIjHNhU+0MMerDq+tRlJ+a7Ro1r6IWNF5MB0Z****** -----END CERTIFICATE REQUEST-----`
     */
    "Csr"?: string;
}
