export interface DeleteLiveStreamMergeRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 合流输出App名称。
     * @example `app`
     */
    "AppName": string;
    /**
     * 合流输出Stream名称。
     * @example `StreamName`
     */
    "StreamName": string;
}
