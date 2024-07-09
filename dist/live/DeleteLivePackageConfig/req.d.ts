export interface DeleteLivePackageConfigRequest {
    /**
     * 直播域名（主播放域名）。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * App名，`*`表示匹配所有名称。
     * @example `AppName`
     */
    "AppName": string;
    /**
     * 直播流名，`*`表示匹配AppName下所有流。
     * @example `StreamName`
     */
    "StreamName": string;
}
