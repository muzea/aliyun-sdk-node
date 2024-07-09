export interface DescribeLiveStreamMergeRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 合流输出App名称。
     * @example `app`
     */
    "AppName"?: string;
    /**
     * 合流输出Stream名称。
     * @example `StreamName`
     */
    "StreamName"?: string;
    /**
     * 播流协议，取值：
     * - **rtmp**（默认值）
     * - **rtc**
     * @example `rtmp`
     */
    "Protocol"?: string;
}
