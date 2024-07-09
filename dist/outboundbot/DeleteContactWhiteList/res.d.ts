export interface DeleteContactWhiteListResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 影响行数
     * @example `5`
     */
    AffectedRows: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
}
