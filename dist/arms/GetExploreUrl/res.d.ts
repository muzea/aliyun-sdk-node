export interface GetExploreUrlResponse {
    /**
     * 返回数据
     * @example `-`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
}
