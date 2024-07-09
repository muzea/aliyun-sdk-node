export interface ModifyAsrConfigResponse {
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 修改结果
     */
    Data: {
        /**
         * 是否影响行数
         */
        AffectedRows: number;
    };
    /**
     * 请求id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    RequestId: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 错误信息
     * @example `Not Found`
     */
    ErrorMsg: string;
}
