export interface DescribeAppEnvStatusResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3CE38930-5A6A-4F7E-A6AD-DBF0EDE5****`
     */
    RequestId: string;
    /**
     * 环境状态信息
     */
    EnvStatus: {
        /**
         * 变更的通知消息
         * @example `Web+ is updating your deplpoyment environment.`
         */
        ChangeBanner: string;
        /**
         * 环境上次变更的变更ID
         * @example `wc-5d3bb06a970b3f2e2a87****`
         */
        LatestChangeId: string;
        /**
         * 环境运行状态
         * @example `RUNNING`
         */
        EnvStatus: string;
        /**
         * 环境名称
         * @example `test1`
         */
        EnvName: string;
        /**
         * 实例代理状态
         */
        InstanceAgentStatus: {
            /**
             * 已连接的实例个数
             * @example `0`
             */
            ConnectedInstances: number;
            /**
             * 已断开连接的实例个数
             * @example `0`
             */
            DisconnectedInstances: number;
        };
        /**
         * 环境的上次状态
         * @example `INITIALIZING`
         */
        LastEnvStatus: string;
        /**
         * ECS实例中运行的应用的健康状态
         */
        InstanceAppStatus: {
            /**
             * 健康实例应用的个数
             * @example `0`
             */
            HealthyInstances: number;
            /**
             * 停止的实例应用个数
             * @example `0`
             */
            StoppedInstances: number;
            /**
             * 不健康的实例应用个数
             * @example `0`
             */
            UnhealthyInstances: number;
            /**
             * 位置状态的实例应用个数
             * @example `0`
             */
            UnknownInstances: number;
        };
        /**
         * 环境ID
         * @example `we-5d1af9c902470221ab7d****`
         */
        EnvId: string;
        /**
         * 是否处于被终止状态
         * @example `false`
         */
        AbortingChange: boolean;
        /**
         * 是否正在对环境进行变更
         * @example `false`
         */
        ApplyingChange: boolean;
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
