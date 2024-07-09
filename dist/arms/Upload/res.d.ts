export interface UploadResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 上传完成的返回数据。
     */
    UploadResult: {
        /**
         * 文件ID。
         * @example `123`
         */
        Fid: string;
        /**
         * SourceMap文件名称。
         * @example `test.js.map`
         */
        FileName: string;
        /**
         * 文件上传时间。
         * @example `1650272251`
         */
        UploadTime: string;
    };
}
