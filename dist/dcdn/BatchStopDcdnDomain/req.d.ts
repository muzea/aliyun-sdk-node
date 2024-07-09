export interface BatchStopDcdnDomainRequest {
    /**
     * 需要接入全站加速的域名，多个用半角逗号（,）分隔。
     * @example `example.com`
     */
    "DomainNames": string;
}
