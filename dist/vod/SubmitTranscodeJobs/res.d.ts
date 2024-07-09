export interface SubmitTranscodeJobsResponse {
    /**
     * 当前提交的转码任务ID。
     * @example `9f4a0df7da2c8a81c8c0408c84****`
     */
    TranscodeTaskId: string;
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B1****`
     */
    RequestId: string;
    TranscodeJobs: {
        /**
         * 媒体作业信息。
         * > HLS多码率自适应打包任务不会返回该参数，需要异步接收回调处理结果。
         */
        TranscodeJob: {
            /**
             * 作业ID。
             * > HLS多码率自适应打包任务不会返回该参数，需要异步接收回调处理结果。
             * @example `d8921ce8505716cfe86fb112c4****`
             */
            JobId: string;
        }[];
    };
}
