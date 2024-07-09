export interface DescribeLiveStreamsNotifyUrlConfigResponse {
    /**
     * 请求ID。
     * @example ` 40A4F36D-A7CC-473A-88E7-154F92242566`
     */
    RequestId: string;
    /**
     * 回调配置。
     */
    LiveStreamsNotifyConfig: {
        /**
         * 是否开启鉴权。取值：
         * - **yes**。
         * - **no**。
         * @example `yes`
         */
        NotifyReqAuth: string;
        /**
         * 回调地址。
         * @example `http://guide.aliyundoc.com/notify`
         */
        NotifyUrl: string;
        /**
         * 鉴权Key。
         * @example `123456`
         */
        NotifyAuthKey: string;
        /**
         * 您的推流域名。
         * @example `demo.aliyundoc.com`
         */
        DomainName: string;
    };
}
