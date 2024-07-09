export interface UploadStreamByURLResponse {
    /**
     * 请求ID。
     * @example `******89-C21D-4B78-AE24-3788B8******`
     */
    RequestId: string;
    /**
     * 上传任务ID。
     * @example `****cdb3e74639973036bc84****`
     */
    JobId: string;
    /**
     * 媒资ID。
     * @example `411bed50018971edb60b0764a0ec6***`
     */
    MediaId: string;
    /**
     * 文件OSS地址。
     * @example `http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp4`
     */
    FileURL: string;
    /**
     * 上传任务对应的源文件URL。
     * @example `https://example.com/sample-stream.mp4`
     */
    SourceURL: string;
}
