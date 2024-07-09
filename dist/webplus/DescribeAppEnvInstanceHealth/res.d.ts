export interface DescribeAppEnvInstanceHealthResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `C8E457BD-0E3D-4EF0-AA1F-A36FE27*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
    /**
     * 实例健康状态查询结果
     */
    EnvInstanceHealth: {
        EnableHealthCheck: boolean;
        /**
         * 环境名称
         * @example `test-env`
         */
        EnvName: string;
        /**
         * 环境ID
         * @example `we-5d3eaaea2977ca5251e*****`
         */
        EnvId: string;
        InstanceHealthList: {
            /**
             * 实例健康列表
             */
            InstanceHealth: {
                /**
                 * 应用状态
                 * @example `HEALTHY`
                 */
                AppStatus: string;
                /**
                 * ECS实例ID
                 * @example `i-wz95ehd0129c8vv*****`
                 */
                InstanceId: string;
                /**
                 * 断连时长
                 * @example `0`
                 */
                DisconnectedTime: string;
                /**
                 * 代理连接状态
                 * @example `CONNECTED`
                 */
                AgentStatus: string;
            }[];
        };
    };
}
