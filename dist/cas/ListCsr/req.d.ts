export interface ListCsrRequest {
    /**
     * 主域名或者CSR名称关键字。
     * @example `test_name`
     */
    "KeyWord"?: string;
    /**
     * CSR使用的密钥算法，取值：RSA、ECC、SM2。
     * @example `RSA`
     */
    "Algorithm"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页，每页展示数据量。
     * @example `10`
     */
    "ShowSize"?: number;
}
