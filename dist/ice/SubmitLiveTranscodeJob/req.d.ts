export interface SubmitLiveTranscodeJobRequest {
    /**
     * 任务名称。
     * @example `task1`
     */
    "Name": string;
    /**
     * 模板ID。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId": string;
    /**
     * 启动模式。
     * - 0 - 立即启动
     * - 1 - 定时启动
     * @example `0`
     */
    "StartMode": number;
    /**
     * 流输入信息。
     */
    "StreamInput": {
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
    "TranscodeOutput": {
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
     * 当StartMode=1时该参数必填。
     */
    "TimedConfig"?: {
        /**
         * 转码任务启动时间。
         * 注意：启动时间与当前时间的跨度不可超过7天。
         * @example `2022-02-21T00:00:00Z`
         */
        StartTime: string;
        /**
         * 转码任务停止时间。
         * 注意：停止时间与当前时间的跨度不可超过7天。
         * @example `2022-07-20T08:20:32Z`
         */
        EndTime: string;
    };
}
