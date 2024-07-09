export interface UploadMediaByURLResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 上传任务列表。
     */
    UploadJobs: {
        /**
         * 上传任务对应的源文件URL。
         * @example `http://example****.mp4`
         */
        SourceURL: string;
        /**
         * 上传任务ID。
         * @example `ad90a501b1b94fb72374ad005046****`
         */
        JobId: string;
    }[];
}
