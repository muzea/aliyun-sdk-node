export interface DescribeDomainCnameRequest {
    /**
     * 需要查询的加速域名，多个用逗号（,）分隔。参数不可为空
     * @example `example.com,example.org`
     */
    "DomainName": string;
}
