export interface DeleteDcdnDomainRequest {
    /**
     * 待删除的加速域名，仅支持删除单个域名。
     * @example `example.com`
     */
    "DomainName": string;
}
