export interface ResumeLiveStreamRequest {
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 用于指定主播推流或客户端播流。目前支持：**publisher**（主播推流）。
     * @example `publisher`
     */
    "LiveStreamType": string;
    /**
     * 推流所属应用名称。可以填为*，表示所有AppName（即不限制AppName）。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 推流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
}
