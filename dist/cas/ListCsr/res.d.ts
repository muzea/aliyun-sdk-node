export interface ListCsrResponse {
    /**
     * CSR所在分页。如果未传入ShowSize则不返回。
     * @example `10`
     */
    ShowSize: number;
    /**
     * CSR所在页码。如果未传入CurrentPage则不返回。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 查询到的总CSR数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * CSR详情。
     */
    CsrList: {
        /**
         * CSR唯一标识。
         * @example `3454`
         */
        CsrId: number;
        /**
         * CSR所使用的密钥算法。
         * @example `RSA`
         */
        Algorithm: string;
        /**
         * 密钥算法长度。
         * > - RSA算法长度一般为2048、3072或4096等。
         * > - ECC和SM2算法长度一般为256。
         * @example `2048`
         */
        KeySize: number;
        /**
         * 使用SHA256算法处理公钥后的值。
         * @example `1234`
         */
        KeySha2: string;
        /**
         * 主域名，通用域名。
         * @example `example.com`
         */
        CommonName: string;
        /**
         * 备用名称，申请同一SSL证书的其他域名。
         * @example `www.aliyundoc.com,www.example.com`
         */
        Sans: string;
        /**
         * 证书组织机构所在国家或地区的代码。例如，CN表示中国，US表示美国。
         * @example `CN`
         */
        CountryCode: string;
        /**
         * 省份或者地区。
         * @example `Beijing`
         */
        Province: string;
        /**
         * 公司所在城市。
         * @example `Beijing`
         */
        Locality: string;
        /**
         * 单位名称。
         * @example `北京CSR科技有限公司`
         */
        CorpName: string;
        /**
         * 证书使用部门。
         * @example `IT`
         */
        Department: string;
        /**
         * 是否存在私钥。
         * @example `true`
         */
        HasPrivateKey: boolean;
        /**
         * CSR名称。
         * @example `test_name`
         */
        Name: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E865F6AD-0294-4A24-A58B-DAC6BE2BDD20`
     */
    RequestId: string;
}
