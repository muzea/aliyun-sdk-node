export interface CreateEnvPodMonitorResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * target匹配提示信息
         * @example `匹配成功。`
         */
        MatchedMsg: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * 创建成功的podMonitor名称
         * @example `arms-admin-pm1`
         */
        PodMonitorName: string;
        /**
         * 匹配出的targets数量
         * @example `1`
         */
        MatchedTargetCount: string;
    };
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
