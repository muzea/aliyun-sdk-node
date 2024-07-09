export interface GetSourceMapInfoResponse {
    /**
     * 请求ID。
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * SourceMap的信息列表。
     */
    SourceMapList: {
        /**
         * SourceMap的ID标识串。
         * @example `atc889zkcf@d8deedfa9bf****​/0.0.0/test.sourcemap.js`
         */
        Fid: string;
        /**
         * SourceMap文件名称。
         * @example `test.sourcemap.js`
         */
        FileName: string;
        /**
         * 文件大小，单位为KB。
         * @example `201223`
         */
        Size: string;
        /**
         * 文件上传时间的时间戳。
         * @example `1590657842000`
         */
        UploadTime: string;
        /**
         * 文件版本。
         * @example `0.0.0`
         */
        Version: string;
    }[];
}
