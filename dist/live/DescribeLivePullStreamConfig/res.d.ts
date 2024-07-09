export interface DescribeLivePullStreamConfigResponse {
    /**
     * 请求ID。
     * @example `A3136B58-5876-4168-83CA-B562781981A0`
     */
    RequestId: string;
    LiveAppRecordList: {
        /**
         * 拉流配置。
         */
        LiveAppRecord: {
            /**
             * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-05-20T01:33:00Z`
             */
            EndTime: string;
            /**
             * 直播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 拉流源站。
             * @example `guide.aliyundoc.com`
             */
            SourceUrl: string;
            /**
             * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-05-15T01:30:00Z`
             */
            StartTime: string;
            /**
             * 拉流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 当前正在使用的拉流源站。
             * @example `guide.aliyundoc.com`
             */
            SourceUsing: string;
            /**
             * 直播流所属的主播流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
