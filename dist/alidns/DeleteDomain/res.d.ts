export interface DeleteDomainResponse {
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
}
