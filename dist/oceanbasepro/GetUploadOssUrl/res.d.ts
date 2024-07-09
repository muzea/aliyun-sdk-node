export interface GetUploadOssUrlResponse {
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误详情。
     */
    ErrorDetail: {
        /**
         * 错误码（新）。
         * @example `
        CM-RESOAT1111
        `
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（新）。
         * @example `null`
         */
        Message: string;
        /**
         * 用于填充 Message 中的占位符。
         */
        ExtraContext: any;
        /**
         * 错误信息的 Key。
         * @example `null`
         */
        MessageMcmsKey: string;
        /**
         * 用于填充 MessageMcmsKey 中的占位符。
         */
        MessageMcmsContext: any;
        /**
         * 错误原因。
         * @example `null`
         */
        Reason: string;
        /**
         * 错误原因的 Key。
         * @example `null`
         */
        ReasonMcmsKey: string;
        /**
         * 错误原因的上下文。
         */
        ReasonMcmsContext: any;
        /**
         * 建议（新）。
         * @example `null`
         */
        Proposal: string;
        /**
         * 建议内容的 Key。
         * @example `null`
         */
        ProposalMcmsKey: string;
        /**
         * 建议内容的上下文。
         */
        ProposalMcmsContext: any;
        /**
         * 上游错误详情，用于处理 HTTP 请求。
         * @example `null`
         */
        UpstreamErrorDetail: any;
    };
    /**
     * 错误码（旧）。
     * @example `INNER_ERROR`
     */
    Code: string;
    /**
     * 错误描述。
     * @example `A system error occurred.`
     */
    Message: string;
    /**
     * 建议。
     * @example `Contact the administrator.`
     */
    Advice: string;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数，分页查询时生效。
     * @example `11`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `278`
     */
    Cost: string;
    /**
     * 获取上传 OSS URL 的信息。
     */
    Data: {
        /**
         * 上传请求内容到 OSS 的临时 URL。
         * @example `https://cn-hangzhou-pre-omsstore.oss-cn-hangzhou.aliyuncs.com/open_api_create_project/oacp_4x****?Expires=169031&OSSAccessKeyId=LTAI5tMN52D****&Signature=XdDFPz%2BXKC****`
         */
        OssUrl: string;
        /**
         * 用于调用接口传的 OssKey。
         * @example `open_api_create_project/oacp_4xd****`
         */
        OssKey: string;
        /**
         * OssUrl 的预计失效时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-26T06:33:11.175
        `
         */
        ExpectedExpirationTime: string;
    };
}
