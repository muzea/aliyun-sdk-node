export interface ChangeDomainOfDnsProductResponse {
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 原始绑定的域名，如果为空，则为第一次绑定。
     * @example `originaldomain.com`
     */
    OriginalDomain: string;
}
