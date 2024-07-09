export interface SetCrossdomainContentRequest {
    /**
     * 跨域文件内容。XML格式，不超过2048个字符。
     * @example `&lt;cross-domain-policy&gt;&lt;allow-access-from domain="*"/&gt;&lt;allow-http-request-headers-from domain="*" headers="*" secure="false"/&gt;&lt;/cross-domain-policy&gt;`
     */
    "Content": string;
    /**
     * OSS存储地址。
     * @example `outin-67870fd5b****1e98a3900163e1c35d5.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation": string;
    /**
     * 资源所有者ID。
     * @example `3461111`
     */
    "ResourceRealOwnerId"?: string;
}
