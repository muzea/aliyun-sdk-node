export interface DescribeLiveStreamStateRequest {
    /**
     * 直播推流域名或播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
}
