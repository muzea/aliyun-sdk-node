export interface ListLiveRecordJobsResponse {
    /**
     * 请求ID。
     * @example `A27DFFA4-F272-5563-8363-CB0BC42740BA`
     */
    RequestId: string;
    /**
     * 实时录制任务列表。
     */
    LiveRecordJobs: {
        /**
         * 录制存储地址。
         */
        RecordOutput: {
            /**
             * 存储地址类型。
             * @example `oss`
             */
            Type: string;
            /**
             * 存储空间名称。
             * @example `imsbucket1`
             */
            Bucket: string;
            /**
             * 存储服务地址。
             * @example `oss-cn-hangzhou.aliyuncs.com`
             */
            Endpoint: string;
        };
        /**
         * 录制任务名称。
         * @example `直播活动录制任务1`
         */
        Name: string;
        /**
         * 回调地址。
         * @example `https://example.com/imsnotify`
         */
        NotifyUrl: string;
        /**
         * 录制模板ID。
         * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
         */
        TemplateId: string;
        /**
         * 创建时间。
         * @example `2022-07-20T03:26:36Z`
         */
        CreateTime: string;
        /**
         * 直播流地址。
         */
        StreamInput: {
            /**
             * 直播流地址类型。
             * @example `rtmp`
             */
            Type: string;
            /**
             * 直播流地址。
             * @example `rtmp://example-live.com/live/stream1`
             */
            Url: string;
        };
        /**
         * 录制任务ID。
         * @example `ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66`
         */
        JobId: string;
        /**
         * 录制任务状态。
         * @example `paused`
         */
        Status: string;
        /**
         * 录制模板名称。
         * @example `test template`
         */
        TemplateName: string;
    }[];
    /**
     * 总记录数。
     * @example `180`
     */
    TotalCount: number;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    PageNo: number;
    /**
     * 分页大小。默认值10。
     * @example `20`
     */
    PageSize: number;
    /**
     * 排序参数，默认根据创建时间倒序。
     * @example `desc`
     */
    SortBy: string;
}
