export interface SubmitPreprocessJobsResponse {
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B1****`
     */
    RequestId: string;
    PreprocessJobs: {
        /**
         * 作业信息。
         */
        PreprocessJob: {
            /**
             * 作业ID。
             * @example `bb396607fd11fee9effbb99c4****`
             */
            JobId: string;
        }[];
    };
}
