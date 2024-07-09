export interface DescribeLiveRecordNotifyConfigResponse {
    /**
     * 请求ID。
     * @example `5056369B-D337-499E-B8B7-B761BD37B08A`
     */
    RequestId: string;
    /**
     * 域名录制回调配置。
     */
    LiveRecordNotifyConfig: {
        /**
         * 是否需要录制任务状态回调。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * @example `false`
         */
        NeedStatusNotify: boolean;
        /**
         * 按需录制回调URL地址。
         * @example `http://guide.aliyundoc.com/ondemandcallback.action`
         */
        OnDemandUrl: string;
        /**
         * 主播流域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 录制回调地址。
         * @example `http://learn.aliyundoc.com/examplecallback.action`
         */
        NotifyUrl: string;
    };
}
