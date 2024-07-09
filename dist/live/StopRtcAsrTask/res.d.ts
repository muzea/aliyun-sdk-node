export interface StopRtcAsrTaskResponse {
    /**
     * 结果描述，为success时成功，失败则返回错误信息。
     * @example `success`
     */
    Description: string;
    /**
     * 网关请求ID。
     * @example `3D208CC1-27C9-51E9-82B8-A6682D466421`
     */
    RequestId: string;
    /**
     * 状态码。返回2000表示成功，返回其他表示异常。
     * @example `2000`
     */
    RetCode: number;
}
