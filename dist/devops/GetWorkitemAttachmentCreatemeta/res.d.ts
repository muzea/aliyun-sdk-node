export interface GetWorkitemAttachmentCreatemetaResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `Invalid.IdNotFound`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `Forbidden.UserNotInCurrentOrganization`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: string;
    /**
     * 可参考OSS的文档：https://help.aliyun.com/document_detail/31926.html
     */
    uploadInfo: {
        /**
         * 上传的认证信息，设置到上传时的OSSAccessKeyId
         * @example `xxxxxxx`
         */
        accessid: string;
        /**
         * 上传的认证信息
         * @example `xxxxxxx`
         */
        policy: string;
        /**
         * 上传的认证信息
         * @example `xdWcrl/yTmIUA0kE7a3B0Ox4Vu8=`
         */
        signature: string;
        /**
         * 上传的认证信息，对应到上传时为key
         * @example `ddd/dddd`
         */
        dir: string;
        /**
         * 上传文件的地址
         * @example `xxxxx`
         */
        host: string;
    };
}
