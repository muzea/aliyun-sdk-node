export interface SaveDataServiceApiTestResultResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****	`
     */
    RequestId: string;
    /**
     * 是否成功保存测试结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
