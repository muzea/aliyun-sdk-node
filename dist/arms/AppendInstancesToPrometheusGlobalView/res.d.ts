export interface AppendInstancesToPrometheusGlobalViewResponse {
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
         * @example `{regionId: 实例所属region, globalViewClusterId: 实例Id, failedInstances: 数据源JSON list中，添加失败的单个JSON的list}`
         */
        Info: string;
    };
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 附加消息
     * @example `success`
     */
    Message: string;
}
