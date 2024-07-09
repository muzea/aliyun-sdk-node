export interface GetPackageJobResponse {
    /**
     * 请求ID。
     * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
     */
    RequestId: string;
    /**
     * 打包任务信息。
     */
    PackageJob: {
        /**
         * 任务ID。
         * @example `ab4802364a2e49208c99efab82df****`
         */
        JobId: string;
        /**
         * 任务来源。
         * - API：API
         * - WorkFlow：工作流
         * - Console：控制台
         * @example `API`
         */
        TriggerSource: string;
        /**
         * 任务名称。
         * @example `job-name`
         */
        Name: string;
        /**
         * 任务输入。
         */
        Inputs: {
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
        Output: {
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
             * @example `oss://bucket/path/to/video.m3u8`
             */
            Media: string;
        };
        /**
         * 输出文件地址。
         * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/output.m3u8`
         */
        OutputUrl: string;
        /**
         * 管道 ID。
         * @example `36f3fee40aa047c0b067d0fb85ed****`
         */
        PipelineId: string;
        /**
         * 任务优先级。数字越大优先级越高，取值范围：1~10。
         * @example `6`
         */
        Priority: number;
        /**
         * 任务状态。
         * @example `Init`
         */
        Status: string;
        /**
         * 错误码。
         * @example `InvalidParameter`
         */
        Code: string;
        /**
         * 错误消息。
         * @example `Resource content bad.`
         */
        Message: string;
        /**
         * 任务提交时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-09-08T11:34:05Z`
         */
        SubmitTime: string;
        /**
         * 任务结束时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-09-08T11:44:05Z`
         */
        FinishTime: string;
        /**
         * 用户自定义信息。
         * @example `{"param": "value"}`
         */
        UserData: string;
        /**
         * 创建时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-09-08T11:34:05Z
        `
         */
        CreateTime: string;
        /**
         * 最后一次修改时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-09-08T11:44:05Z
        `
         */
        ModifiedTime: string;
    };
}
