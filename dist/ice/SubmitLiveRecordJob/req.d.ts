export interface SubmitLiveRecordJobRequest {
    /**
     * 回调地址
     * @example `https://example.com/imsnotify`
     */
    "NotifyUrl"?: string;
    /**
     * 直播流地址。
     */
    "StreamInput": {
        /**
         * 直播流地址类型。目前支持rtmp。
         * @example `rtmp`
         */
        Type: string;
        /**
         * 直播流地址。
         * @example `rtmp://example.com/live/stream1`
         */
        Url: string;
    };
    /**
     * 录制存储地址。
     */
    "RecordOutput": {
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
     * 录制模板ID。
     * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
     */
    "TemplateId": string;
    /**
     * 录制任务名称。
     * @example `live stream record 1`
     */
    "Name": string;
}
