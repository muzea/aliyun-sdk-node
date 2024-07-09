export interface ListTranscodeTaskResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 转码处理信息列表。
     */
    TranscodeTaskList: {
        /**
         * 转码任务创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:35:12Z`
         */
        CreationTime: string;
        /**
         * 触发类型。取值：
         * - **Auto**：上传视频，自动触发。
         * - **Manual**：SubmitTranscodeJobs接口触发。
         * @example `Auto`
         */
        Trigger: string;
        /**
         * 转码任务状态。
         * - **Processing**：处理中。
         * - **Partial**：部分转码完成。
         * - **CompleteAllSucc**：全部处理完成，且全部转码成功。
         * - **CompleteAllFail**：全部处理完成，且全部转码失败，如果源片有问题，则不会发起任何转码作业，整个转码任务失败。
         * - **CompletePartialSucc**：全部转码完成，但仅部分转码成功。
         * @example `Processing`
         */
        TaskStatus: string;
        /**
         * 音/视频ID。
         * @example `d4860fcc6a5*****bce9fed52e893824`
         */
        VideoId: string;
        /**
         * 转码任务完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:40:12Z`
         */
        CompleteTime: string;
        /**
         * 转码使用的模板组ID。
         * @example `b500c7094bd24*****f3e9900752d7c3`
         */
        TranscodeTemplateGroupId: string;
        /**
         * 转码任务ID。
         * @example `b1b65ab107*****ba3dbb900f6c1fe0`
         */
        TranscodeTaskId: string;
    }[];
}
