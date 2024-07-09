export interface CloseLiveShiftRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。支持通配符*，代表该域名下所有的AppName。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 直播流流名称。支持通配符*，代表该AppName下所有的StreamName。
     * @example `liveStream****`
     */
    "StreamName"?: string;
}
