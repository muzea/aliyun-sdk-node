export interface RemoveSourcesFromPrometheusGlobalViewResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 操作是否成功：
         * - `true`：操作成功
         * - `false`：操作失败
         * @example `True`
         */
        Success: boolean;
        /**
         * 附加说明信息。
         * @example `OK`
         */
        Msg: string;
        /**
         * Info级别信息。
         * @example `{regionId: 实例所属region, globalViewClusterId: 实例Id}`
         */
        Info: string;
    };
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `9319A57D-2D9E-472A-B69B-CF3CD16D****`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
