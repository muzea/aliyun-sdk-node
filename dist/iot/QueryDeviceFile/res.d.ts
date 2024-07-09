export interface QueryDeviceFileResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的文件信息。
     */
    Data: {
        /**
         * 文件创建时间。
         * @example `2019-03-21T08:45:42.000Z`
         */
        UtcCreatedOn: string;
        /**
         * 文件名称。
         * @example `testFile3.txt`
         */
        Name: string;
        /**
         * 文件下载URL。
         * @example `http://iotx-file-store.oss-cn-shanghai.aliyuncs.com/device_file/A849E4E5CFF64804A18D9384AC9D****​/aGEKIpp5NAGxdP2oo90000****​/testFile3.txt?Expires=1553162075&OSSAccessKeyId=LTAIYLScbHiV****&Signature=%2F88xdEFPukJ****%2F8****%2Bdv3io%3D`
         */
        DownloadUrl: string;
        /**
         * 文件大小，单位：KB。
         * @example `102400`
         */
        Size: string;
        /**
         * 文件标识符。
         * @example `6UCo1SqbqnQEoh9aKqDQ01****`
         */
        FileId: string;
    };
}
