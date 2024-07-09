export interface GetOSSInfoForUploadFileRequest {
    /**
     * 业务类型，默认值为**fcMediaSms**。
     * 创建签名、创建模板时，上传**更多资料**场景，该值为**fcMediaSms**。
     * @example `fcMediaSms`
     */
    "BizType"?: string;
}
