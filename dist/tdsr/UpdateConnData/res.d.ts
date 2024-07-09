export interface UpdateConnDataResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
}
