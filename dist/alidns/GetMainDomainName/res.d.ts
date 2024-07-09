export interface GetMainDomainNameResponse {
    /**
     * 主机记录信息。
     * @example `www`
     */
    RR: string;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
    /**
     * 输入域名的级别。
     * @example `2`
     */
    DomainLevel: number;
}
