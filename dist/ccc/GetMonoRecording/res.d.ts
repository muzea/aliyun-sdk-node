export interface GetMonoRecordingResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 录音文件的OSS下载地址，注意下载地址的过期时间，下载地址的有效期为1天。
         * @example `http://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-record/job-6538214103689****.wav?Expires=1610910578&OSSAccessKeyId=****&Signature=****`
         */
        FileUrl: string;
        /**
         * 录音文件名称。
         * @example `job-6538214103689****.wav`
         */
        FileName: string;
        /**
         * 录音时长，单位：毫秒。
         * @example `30000`
         */
        Duration: number;
    };
}
