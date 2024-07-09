export interface UpdateLiveTranscodeJobRequest {
    /**
     * 任务名称。
     * @example `mytest3`
     */
    "Name"?: string;
    /**
     * 任务ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "JobId": string;
    /**
     * 流输入信息。
     */
    "StreamInput"?: {
        /**
         * 流输入类型。目前只支持rtmp。
         * @example `rtmp`
         */
        Type: string;
        /**
         * 输入流地址。
         * @example `rtmp://mydomain/app/stream1`
         */
        InputUrl: string;
    };
    /**
     * 转码输出信息。
     */
    "TranscodeOutput"?: {
        /**
         * 输出流类型。
         * LiveCenter - 阿里云视频直播域名生成地址
         * 目前只支持LiveCenter
         * @example `LiveCenter`
         */
        Type: string;
        /**
         * 视频直播播流域名。
         * @example `mydomain`
         */
        DomainName: string;
    };
    /**
     * 定时任务配置。
     */
    "TimedConfig"?: {
        /**
         * 转码任务启动时间。
         * 注意：启动时间与当前时间的跨度不可超过7天。
         * @example `2022-06-19T02:16:41Z
        `
         */
        StartTime: string;
        /**
         * 转码任务停止时间。
         * 注意：停止时间与当前时间的跨度不可超过7天。
         * @example `2022-08-05T06:08:31Z`
         */
        EndTime: string;
    };
}
