export interface DescribeLiveDelayConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 直播流所属应用名称。支持通配符*，代表该域名下所有的AppName。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 直播流流名称。支持通配符*，代表该AppName下所有的StreamName。
     * @example `liveStream****`
     */
    "Stream": string;
}
