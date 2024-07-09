export interface SubmitSnapshotJobResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-5EB0-4AF6-D7393642****`
     */
    RequestId: string;
    /**
     * 截图作业信息。
     */
    SnapshotJob: {
        /**
         * 截图作业ID。
         * @example `ad90a501b1b94b72374ad0050464****`
         */
        JobId: string;
    };
}
