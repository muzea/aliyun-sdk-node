export interface SubmitMediaInfoJobRequest {
    /**
     * 任务名字。
     * @example `job-name`
     */
    "Name"?: string;
    /**
     * 任务输入。
     */
    "Input": {
        /**
         * 媒体对象类型 - OSS: oss文件, Media: 媒资 ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 媒体值：
         * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议。
         * > URL中的 OSS bucket 需要先添加到IMS[存储管理](~~440592~~)后再使用。
         * - type 为 Media 时，为媒资 ID。
         * @example `oss://bucket/path/to/video.mp4`
         */
        Media: string;
    };
    /**
     * 用户数据。
     * @example `user-data`
     */
    "UserData"?: string;
    /**
     * 调度参数。
     */
    "ScheduleConfig"?: {
        /**
         * 管道 ID。
         * @example `e37ebee5d98b4781897f6086e89f9c56`
         */
        PipelineId: string;
        /**
         * 任务优先级。数字越大优先级越高，取值范围：1~10
         * @example `5`
         */
        Priority: number;
    };
}
