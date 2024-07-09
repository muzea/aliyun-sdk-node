export interface DescribeCertificateStateResponse {
    /**
     * 证书申请订单的状态。取值：
     * - **domain_verify**：**待验证**，表示证书申请提交后，您还没有完成域名验证。
     *     > 您在提交证书申请后，必须手动完成域名所有权验证，证书申请才可以进入审核环节。如果您还没有完成域名验证，则可以参照本接口的返回数据，完成域名验证。
     * - **process**：**审核中**，表示证书申请处于CA中心审核环节。
     * - **verify_fail**：**审核失败**，表示证书申请审核失败。
     *     > 审核失败可能是因为您提交的证书申请信息不正确，建议您调用[DeleteCertificateRequest](~~455294~~)删除审核失败的订单（已删除订单不会消耗证书资源包个数），并重新提交证书申请。
     * - **certificate**：**已签发**，表示证书已经签发。
     * - **payed**：**待申请**，表示待申请证书。
     * - **unknow**：**状态未知**。
     * @example `domain_verify`
     */
    Type: string;
    /**
     * 使用文件验证方式进行域名验证时，待验证的域名。您需要连接该域名对应的服务器，并在服务器上创建指定的文件（即**Uri**）。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**FILE**（表示验证方式为文件验证）时，才会返回该参数。
     * @example `www.example.com`
     */
    Domain: string;
    /**
     * 使用DNS验证方式进行域名验证时，您需要添加的解析记录的类型。取值：
     * - **TXT**：表示文本记录。
     * - **CNAME**：表示别名记录。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**DNS**（表示验证方式为DNS验证）时，才会返回该参数。
     * @example `TXT`
     */
    RecordType: string;
    /**
     * 证书内容（PEM格式）。关于PEM格式的更多介绍以及如何进行证书格式转换，请参见[主流数字证书都有哪些格式？](~~42214~~)。
     * > 仅当**Type**取值为**certificate**（表示证书已经签发）时，才会返回该参数。
     * @example `-----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----`
     */
    Certificate: string;
    /**
     * 本次请求的ID。
     * @example `082FAB35-6AB9-4FD5-8750-D36673548E76`
     */
    RequestId: string;
    /**
     * 使用DNS验证方式进行域名验证时，您需要操作的主机记录。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**DNS**（表示验证方式为DNS验证）时，才会返回该参数。
     * @example `_dnsauth`
     */
    RecordDomain: string;
    /**
     * 证书私钥内容（PEM格式）。关于PEM格式的更多介绍以及如何进行证书格式转换，请参见[主流数字证书都有哪些格式？](~~42214~~)。
     * > 仅当**Type**取值为**certificate**（表示证书已经签发）时，才会返回该参数。
     * @example `-----BEGIN RSA PRIVATE KEY-----…… -----END RSA PRIVATE KEY-----`
     */
    PrivateKey: string;
    /**
     * 提交证书申请时选择的域名验证方式。取值：
     * - **DNS**： 表示DNS验证。通过在域名的DNS管理平台为域名添加指定的DNS解析记录，验证域名的所有权。
     * - **FILE**：表示文件验证。通过在域名服务器上创建指定的文件，验证域名的所有权。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节），才会返回该参数。
     * @example `FILE`
     */
    ValidateType: string;
    /**
     * 使用DNS验证方式进行域名验证时，您需要添加的解析记录的记录值。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**DNS**（表示验证方式为DNS验证）时，才会返回该参数。
     * @example `20200420000000223erigacv46uhaubchcm0o7spxi7i2isvjq59mlx9lucnkqcy`
     */
    RecordValue: string;
    /**
     * 使用文件验证方式进行域名验证时，您需要在新创建文件中写入的内容。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**FILE**（表示验证方式为文件验证）时，才会返回该参数。
     * @example `http://example.com/.well-known/pki-validation/fileauth.txt`
     */
    Content: string;
    /**
     * 使用文件验证方式进行域名验证时，您需要在域名服务器中创建的文件。**Uri**包含文件路径及名称。
     * > 仅当**Type**取值为**domain_verify**（表示域名验证环节）且**ValidateType**取值为**FILE**（表示验证方式为文件验证）时，才会返回该参数。
     * @example `/.well-known/pki-validation/fileauth.txt`
     */
    Uri: string;
}
