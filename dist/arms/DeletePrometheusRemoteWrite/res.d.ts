export interface DeletePrometheusRemoteWriteResponse {
    /**
     * 请求ID
     * @example `9319A57D-2D9E-472A-B69B-CF3CD16D****`
     */
    RequestId: string;
    /**
     * 返回成功删除的配置项数量，或异常信息。
     * @example `1`
     */
    Data: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 接口状态或pop错误码
     * @example `200`
     */
    Code: number;
}
