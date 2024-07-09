export interface DescribeDataCheckReportUrlResponse {
    /**
     * 请求ID。
     * @example `AF2DE23-B692-5B85-90B7-44B6F4D8****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 校验报告的下载地址。
     * @example `https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/dw612cru18e****​/dtsdb/diff/student.diff.zip?Expires=****`
     */
    DynamicMessage: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
