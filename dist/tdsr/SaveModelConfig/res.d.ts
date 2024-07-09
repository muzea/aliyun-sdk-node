export interface SaveModelConfigResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `B28A2ECB-AB29-1E01****`
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
     * @example `SUCCESS`
     */
    Message: string;
}
