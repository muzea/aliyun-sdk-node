export interface ListWorkitemAttachmentsResponse {
    /**
     * Id of the request
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误消息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 请求是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    success: boolean;
    /**
     * 附件列表
     */
    attachments: {
        /**
         * 文件唯一标识
         * @example `dflkjlsdddsdl234lkjfg`
         */
        fileIdentifier: string;
        /**
         * 文件名称
         * @example `Artifacts_1565193_1.tgz`
         */
        fileName: string;
        /**
         * 文件后缀
         * @example `tgz`
         */
        fileSuffix: string;
        /**
         * 文件内容大小，单位：bytes
         * @example `50`
         */
        size: string;
        /**
         * 下载的url
         * @example `http://grace-share.oss-cn-hangzhou.aliyuncs.com/qf%2Fheap.bin?Expires=1675750082&OSSAccessKeyId=xxxxxxxx&Signature=xxxxx%3D`
         */
        url: string;
        /**
         * 创建时间
         * @example `1545726028000`
         */
        gmtCreate: number;
        /**
         * 创建人的阿里云accountId
         * @example `237109`
         */
        creator: string;
    }[];
}
