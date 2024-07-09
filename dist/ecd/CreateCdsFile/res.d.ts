export interface CreateCdsFileResponse {
    /**
     * 请求ID。
     * @example `2BAFE05D-FFB9-5938-96D0-08017DB9****`
     */
    RequestId: string;
    /**
     * 返回的文件上传对象。
     */
    FileModel: {
        /**
         * 文件上传地址，默认有效时间15分钟。
         * @example `https://data.aliyunpds.com/xxx/xxx?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx&partNumber=1&uploadId=0CC175B9C0F1B6A831C399E26977****`
         */
        UploadUrl: string;
        /**
         * 文件ID。
         * @example `646ec2f662b1e08f7a2b4d648982f906****`
         */
        FileId: string;
        /**
         * 文件上传任务的ID。
         * @example `20BE155AC20943BE9D405B0997A9****`
         */
        UploadId: string;
    };
}
