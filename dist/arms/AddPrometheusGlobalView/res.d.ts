export interface AddPrometheusGlobalViewResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 查询是否成功。
         * - `true`：成功。
         * - `false`：失败。
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
         * @example `{regionId: 实例所属region, globalViewClusterId: 实例Id, failedInstances: 数据源JSON list中，添加失败的单个JSON的list}`
         */
        Info: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 聚合实例ID。
             * @example `global-v2-cn-1483223059272121-jmjjfznz`
             */
            GlobalViewClusterId: string;
            /**
             * 添加失败的实例列表。
             * @example `[{"sourceName": "数据源名称- ArmsPrometheus","sourceType":"AlibabaPrometheus","userId":"UserID","clusterId":"ClusterId",}]`
             */
            FailedInstances: string;
        };
    };
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
