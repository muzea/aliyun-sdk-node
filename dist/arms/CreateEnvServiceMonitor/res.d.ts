export interface CreateEnvServiceMonitorResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Target匹配提示信息。
         * @example `匹配成功。`
         */
        MatchedMsg: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * 成功创建的ServiceMonitor名称。
         * @example `arms-admin1`
         */
        ServiceMonitorName: string;
        /**
         * 匹配出的target数量。
         * @example `1`
         */
        MatchedTargetCount: number;
    };
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
