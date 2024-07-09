export interface DeleteAxgGroupResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 返回结果的提示信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `9297B722-A016-43FB-B51A-E54050D9369D`
     */
    RequestId: string;
}
