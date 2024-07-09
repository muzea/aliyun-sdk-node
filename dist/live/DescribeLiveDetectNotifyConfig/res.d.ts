export interface DescribeLiveDetectNotifyConfigResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 回调配置。
     */
    LiveDetectNotifyConfig: {
        /**
         * 主播流域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 通知回调地址。
         * @example `http://aliyundoc.com`
         */
        NotifyUrl: string;
    };
}
