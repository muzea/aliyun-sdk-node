export interface CreateCsrRequest {
    /**
     * 密钥算法长度。
     * - RSA算法长度一般为2048、3072、4096等。
     * - ECC和SM2算法长度一般为256。
     * @example `2048`
     */
    "KeySize": number;
    /**
     * CSR密钥算法，仅支持RSA、SM2、ECC。更多关于密钥算法的说明，请参见[证书选购指南](~~197871~~)。
     * @example `RSA`
     */
    "Algorithm": string;
    /**
     * 主域名，通用域名。
     * @example `example.com`
     */
    "CommonName": string;
    /**
     * 备用名称，申请同一SSL证书的其他域名，多个域名请使用英文逗号分隔。
     * @example `www.aliyundoc.com,www.example.com`
     */
    "Sans"?: string;
    /**
     * 设置证书组织机构所在国家或地区的代码。例如，CN 表示中国，US 表示美国。
     * @example `CN`
     */
    "CountryCode": string;
    /**
     * 公司所在省份或者地区。
     * @example `Beijing`
     */
    "Province": string;
    /**
     * 公司所在城市。
     * @example `Beijing`
     */
    "Locality": string;
    /**
     * 单位名称。
     * @example `北京CSR科技有效公司`
     */
    "CorpName"?: string;
    /**
     * CSR名称。长度不超过50个字符，且仅支持英文大小写字母（a~z和A~Z）、阿拉伯数字（0~9）、下划线（_）、短划线（-）和半角句号（.）。
     * @example `csr-123`
     */
    "Name"?: string;
    /**
     * 证书使用部门。
     * @example `IT`
     */
    "Department"?: string;
}
