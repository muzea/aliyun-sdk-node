export interface CreateUploadFileJobResponse {
    /**
     * 请求ID。
     * @example `E103C5F9-DE47-53F2-BF34-D71DF38F****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `Unsupported url scheme : null, scheme must be https or http`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrorCode: string;
    /**
     * 上传附件任务值。
     * > 您可以通过调用[GetUserUploadFileJob](~~206069~~)接口查询附件上传的进展与任务详情。
     * @example `761f18031635736380812****`
     */
    JobKey: string;
}
