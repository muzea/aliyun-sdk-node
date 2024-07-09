export interface AddPrometheusGlobalViewByAliClusterIdsResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 查询是否成功：
         * - `true`：成功。
         * - `false`：失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 附加说明信息。
         * @example `success`
         */
        Msg: string;
        /**
         * Info级别信息。
         * @example `{regionId: 实例所属region, globalViewClusterId: 实例Id, failedClusterIds: 添加失败的AliClusterId（一般是clusterId有误，或者跨大洲添加）}`
         */
        Info: string;
    };
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `3A0EA2AF-C9B3-555C-B9D5-5DD8F5EF98A9`
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
}
