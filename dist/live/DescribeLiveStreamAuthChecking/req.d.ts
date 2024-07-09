export interface DescribeLiveStreamAuthCheckingRequest {
    /**
     * 直播推流域名或播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 完整的推流地址或播放地址。
     * @example `http://example.com/live/test.flv?auth_key=1664248******`
     */
    "Url": string;
}
