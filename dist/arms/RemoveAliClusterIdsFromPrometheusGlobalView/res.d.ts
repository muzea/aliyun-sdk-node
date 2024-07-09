export interface RemoveAliClusterIdsFromPrometheusGlobalViewResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 操作是否成功：
         * - `true`：操作成功
         * - `false`：操作失败
         * @example `true`
         */
        Success: boolean;
        /**
         * 附加说明信息。
         * @example `OK`
         */
        Msg: string;
        /**
         * Info级别信息。
         * @example `{regionId: 实例所属region, globalViewClusterId: 实例Id, failedClusterIds: 添加失败的AliClusterId（一般是clusterId有误）}`
         */
        Info: string;
    };
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
}
