export interface ListPackageJobsResponse {
    /**
     * 请求ID。
     * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
     */
    RequestId: string;
    /**
     * 打包任务列表。
     */
    PackageJobList: {
        /**
         * 打包任务列表。
         */
        PackageJobs: {
            /**
             * 任务ID。
             * @example `7b38a5d86f1e47838927b6e7ccb1****`
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
                 * @example `oss://bucket/path/to/video.mp4`
                 */
                Media: string;
            };
            /**
             * 管道ID。
             * @example `5b40833e4c3e4d4e95a866abb9a4****`
             */
            PipelineId: string;
            /**
             * 任务优先级。数字越大优先级越高，取值范围：1~10。默认为6。
             * @example `6`
             */
            Priority: number;
            /**
             * 任务状态。
             * @example `Success`
             */
            Status: string;
            /**
             * 错误码。
             * @example `InvalidParameter`
             */
            Code: string;
            /**
             * 错误消息。
             * @example `Resource content bad. `
             */
            Message: string;
            /**
             * 任务提交时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
             * @example `2022-07-07T14:00:32Z`
             */
            SubmitTime: string;
            /**
             * 任务结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
             * @example `2022-07-07T15:00:32Z`
             */
            FinishTime: string;
            /**
             * 用户自定义信息。
             * @example `{"param": "value"}`
             */
            UserData: string;
            /**
             * 创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
             * @example `2022-07-07T14:00:32Z`
             */
            CreateTime: string;
            /**
             * 最后修改时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
             * @example `2022-07-07T15:00:32Z`
             */
            ModifiedTime: string;
        }[];
        /**
         * 下一页标识，第一次提交时为空即可。下一页标识将在第一次查询后返回。
         * @example `019daf5780f74831b0e1a767c9f1****`
         */
        NextPageToken: string;
    };
}
