export interface GetLiveRecordJobResponse {
    /**
     * 录制任务。
     */
    RecordJob: {
        /**
         * 回调地址。
         * @example `https://example.com/imsnotify`
         */
        NotifyUrl: string;
        /**
         * 创建时间。
         * @example `2022-07-20T02:48:58Z`
         */
        CreateTime: string;
        /**
         * 直播流地址。
         */
        StreamInput: {
            /**
             * 直播流类型，目前支持rtmp。
             * @example `rtmp`
             */
            Type: string;
            /**
             * 直播流地址。
             * @example `rtmp://example.com/app/stream`
             */
            Url: string;
        };
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
             * @example `oss-cn-shanghai.aliyuncs.com`
             */
            Endpoint: string;
        };
        /**
         * 录制模板ID。
         * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
         */
        TemplateId: string;
        /**
         * 录制模板名称。
         * @example `test template`
         */
        TemplateName: string;
        /**
         * 录制任务名称。
         * @example `直播活动录制任务1`
         */
        Name: string;
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
    };
    /**
     * 请求ID。
     * @example `B57A046C-CE33-5FBB-B57A-D2B89ACF6907`
     */
    RequestId: string;
}
