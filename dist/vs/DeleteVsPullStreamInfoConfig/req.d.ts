export interface DeleteVsPullStreamInfoConfigRequest {
    /**
     * 您的拉流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `xxxApp`
     */
    "AppName": string;
    /**
     * 直播流名。
     * @example `xxxStream`
     */
    "StreamName": string;
}
