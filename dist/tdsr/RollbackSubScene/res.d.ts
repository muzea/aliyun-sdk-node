export interface RollbackSubSceneResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `3BCAD49D-2AC1-13EB-AC19-8C7A46CF****`
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
     * @example `sucess`
     */
    Message: string;
}
