export interface CreateWHClientCertificateRequest {
    /**
     * 客户端证书支持的扩展信息SAN（Subject Alternative Name）类型。取值：
     * - **1**：表示邮箱。
     * - **2**：表示域名。
     * - **6**：表示统一资源标志符URI（Uniform Resource Identifier）。
     * - **7**：表示IP地址。
     * @example `2`
     */
    "SanType"?: number;
    /**
     * 客户端证书的具体扩展信息。支持输入多个扩展信息，如果您需要输入多个扩展信息，请用半角逗号（,）将其隔开。
     * @example `example.com`
     */
    "SanValue"?: string;
    /**
     * 客户端证书的公用名。支持使用中文、英文字符等。
     * @example `aliyun`
     */
    "CommonName"?: string;
    /**
     * 客户端证书的密钥算法。密钥算法使用<加密算法>_<密钥长度>格式表示。取值：
     * - **RSA_1024**：对应签名算法为Sha256WithRSA。
     * - **RSA_2048** ：对应签名算法为Sha256WithRSA。
     * - **RSA_4096**：对应签名算法为Sha256WithRSA。
     * - **ECC_256**：对应签名算法为Sha256WithECDSA。
     * - **ECC_384**：对应签名算法为Sha256WithECDSA。
     * - **ECC_512**：对应签名算法为Sha256WithECDSA。
     * - **SM2_256**：对应签名算法为SM3WithSM2。
     * 客户端证书的加密算法必须与子CA证书一致，密钥长度可以不一致。例如：子CA证书的密钥算法为RSA_2048，则客户端证书的密钥算法必须是RSA_1024、RSA_2048、RSA_4096中的一种。
     * @example `RSA_2048`
     */
    "Algorithm"?: string;
    /**
     * CSR内容。您可以通过OpenSSL工具或者Keytool工具生成CSR。
     * @example `-----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----`
     */
    "Csr"?: string;
    /**
     * 签发该证书的子CA证书的唯一识别码。
     * @example `273ae6bb538d538c70c01f81jh2****`
     */
    "ParentIdentifier": string;
    /**
     * 客户端证书的有效期。单位：天。
     * Days、BeforeTime、AfterTime参数不能同时为空，并且BeforeTime、AfterTime参数必须同时为空或者同时设置。该参数具体设置说明如下：
     * - 当设置Days参数时，您可以选择同时设置BeforeTime、AfterTime参数或者不设置BeforeTime、AfterTime参数。
     * - 当不设置Days参数时，您必须设置BeforeTime、AfterTime参数。
     * > 当您同时设置Days、BeforeTime、AfterTime参数时，客户端证书的有效期以Days参数的值为准。
     * @example `365`
     */
    "Days"?: number;
    /**
     * 客户端证书的签发时间，使用时间戳格式，默认为您调用该接口的时间。单位：秒。
     * > BeforeTime和AfterTime参数必须同时为空或者同时设置。
     * @example `1634283958`
     */
    "BeforeTime"?: number;
    /**
     * 客户端证书的服务到期时间，使用时间戳格式。单位：秒。
     * > BeforeTime和AfterTime参数必须同时为空或者同时设置。
     * @example `1665819958`
     */
    "AfterTime"?: number;
    /**
     * 根CA证书关联的组织机构（对应您的企业或单位）的名称。支持使用中文、英文字符等。
     * @example `阿里巴巴网络技术有限公司`
     */
    "Organization"?: string;
    /**
     * 证书所属的公司或组织名称。
     * @example `IT`
     */
    "OrganizationUnit"?: string;
    /**
     * 购买证书的用户所属的公司或组织所在的国家。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 组织机构所在省份、直辖市或自治区的名称。支持使用中文、英文字符等。
     * @example `Zhejiang`
     */
    "State"?: string;
    /**
     * 组织机构所在城市的名称。支持使用中文、英文字符等。
     * @example `Hangzhou`
     */
    "Locality"?: string;
    /**
     * 证书有效期。单位：年。
     * @example `1`
     */
    "Years"?: number;
    /**
     * 证书有效期。单位：月。
     * @example `12`
     */
    "Months"?: number;
    /**
     * 立即返回数字证书。
     * - **0**，不返回。默认值。
     * - **1**，返回证书。
     * - **2**， 返回证书及其证书链 。
     * @example `1`
     */
    "Immediately"?: number;
}
