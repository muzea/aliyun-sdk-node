export interface DescribeVsStreamsNotifyUrlConfigResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    LiveStreamsNotifyConfig: {
        AuthType: string;
        AuthKey: string;
        /**
         * 您的推流域名。
         * @example `example.aliyundoc.com`
         */
        DomainName: string;
        /**
         * 回调地址。
         * @example `https://example.com/callback`
         */
        NotifyUrl: string;
    };
}
