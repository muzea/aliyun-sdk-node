export interface DescribeLiveLazyPullStreamConfigResponse {
    /**
     * 请求ID。
     * @example `A3136B58-5876-4168-83CA-B562781981A0`
     */
    RequestId: string;
    LiveLazyPullConfigList: {
        /**
         * 拉流配置。
         */
        LiveLazyPullConfig: {
            /**
             * 应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            PullArgs: string;
            /**
             * 回源播流所属应用名称。 使用播放URL中的App则该项为空。
             * @example `livePullApp****`
             */
            PullAppName: string;
            /**
             * 回源播流协议。取值：
             * - **rtmp**
             * - **httpflv**
             * - **hls**
             * @example `RTMP`
             */
            PullProtocol: string;
            /**
             * 回源播域名。
             * @example `guide.aliyundoc.com`
             */
            PullDomainName: string;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 转码播放触发拉流。默认为**no**。可选值：
             * - **yes**
             * - **no**
             * @example `no`
             */
            TranscodeLazy: string;
        }[];
    };
}
