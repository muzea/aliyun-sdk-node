export interface DescribeVsPullStreamInfoConfigResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    LiveAppRecordList: {
        /**
         * 拉流配置。
         */
        LiveAppRecord: {
            /**
             * 结束时间。
             * @example `2016-05-15T07:30:00Z`
             */
            EndTime: string;
            /**
             * 直播流所属应用名称。
             * @example `xxxApp`
             */
            AppName: string;
            /**
             * 拉流源站。
             * @example `http://test`
             */
            SourceUrl: string;
            /**
             * 开始时间。
             * @example `2016-05-15T01:30:00Z`
             */
            StartTime: string;
            /**
             * 流名称。
             * @example `xxxStream`
             */
            StreamName: string;
            /**
             * 流所属拉流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
