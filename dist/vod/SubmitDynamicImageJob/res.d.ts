export interface SubmitDynamicImageJobResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-74A6-BEF6-D7393642****`
     */
    RequestId: string;
    /**
     * 动图作业信息。
     */
    DynamicImageJob: {
        /**
         * 动图作业ID。
         * @example `ad90a501b1bfb72374ad0050746****`
         */
        JobId: string;
    };
}
