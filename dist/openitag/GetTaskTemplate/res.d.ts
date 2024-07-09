export interface GetTaskTemplateResponse {
    /**
     * 返回编码，默认为0，表示执行正常。
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1****`
     */
    RequestId: string;
    /**
     * 详情。
     * @example `""`
     */
    Details: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 模板详情。
     */
    Template: any;
    /**
     * 错误码。
     * @example `""`
     */
    ErrorCode: string;
}
