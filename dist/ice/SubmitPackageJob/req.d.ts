export interface SubmitPackageJobRequest {
    /**
     * 任务名称。
     * @example `job-name`
     */
    "Name"?: string;
    /**
     * 任务输入。
     */
    "Inputs": {
        /**
         * 打包播放流文件信息。
         */
        Input: {
            /**
             * 媒体对象类型。
             * 取值：
             * - OSS: OSS文件。
             * - Media: 媒资 ID。
             * @example `OSS`
             */
            Type: string;
            /**
             * 媒体值：
             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
             * - type 为 Media 时，为媒资 ID。
             * @example `oss://bucket/path/to/video.mp4`
             */
            Media: string;
        };
    }[];
    /**
     * 任务输出。
     */
    "Output": {
        /**
         * 媒体对象类型。
         * 取值：
         * - OSS: OSS文件。
         * - Media: 媒资 ID。
         * @example `OSS`
         */
        Type: string;
        /**
         * 媒体值：
         *       type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
         *       type 为 Media 时，为媒资 ID。
         * @example `oss://bucket/path/to/video.mp4`
         */
        Media: string;
    };
    /**
     * 调度配置。
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
    /**
     * 用户自定义信息。
     * @example `{"param": "value"}`
     */
    "UserData"?: string;
}
