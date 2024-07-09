export interface UpdateSubSceneSeqResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `344794c32937474a9c59eb13093****`
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
