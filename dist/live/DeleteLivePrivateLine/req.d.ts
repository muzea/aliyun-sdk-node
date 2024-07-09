export interface DeleteLivePrivateLineRequest {
    /**
     * 主播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `live`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `testStream`
     */
    "StreamName": string;
    /**
     * 加速类型，取值：
     * - play：播流加速。
     * - publish：推流加速。
     * @example `play`
     */
    "AccelerationType": string;
}
