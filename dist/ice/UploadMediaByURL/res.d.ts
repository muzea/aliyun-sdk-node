export interface UploadMediaByURLResponse {
    /**
     * 请求ID。
     * @example `****83B7-7F87-4792-BFE9-63CD2137****`
     */
    RequestId: string;
    /**
     * 多个Job信息。
     */
    UploadJobs: {
        /**
         * 上传任务ID。
         * @example `20ce1e05dba64576b96e9683879f0***`
         */
        JobId: string;
        /**
         * 上传任务对应的源文件URL。
         * @example `http://example****.mp4
        `
         */
        SourceURL: string;
        /**
         * 媒资ID。
         * @example `f476988629f54a7b8a4ba90d1a6c7***`
         */
        MediaId: string;
    }[];
}
