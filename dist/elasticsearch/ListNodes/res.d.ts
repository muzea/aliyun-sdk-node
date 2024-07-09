export interface ListNodesResponse {
    /**
     * 请求ID。
     * @example `E1FD7642-7C40-4FF2-9C0F-21F1A1746F70`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回记录数。
         * @example `10`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 是否已开通云助手。支持：
         * - true：开通
         * - false：未开通
         * @example `true`
         */
        cloudAssistantStatus: string;
        /**
         * ECS实例名称。
         * @example `ECS_beat`
         */
        ecsInstanceName: string;
        /**
         * ECS实例ID。
         * @example `i-bp13y63575oypr****`
         */
        ecsInstanceId: string;
        /**
         * ECS实例的操作系统类型。支持：
         * - windows：Windows Server
         * - linux：Linux
         * @example `linux`
         */
        osType: string;
        /**
         * ECS实例状态。支持：
         * - running：运行中
         * - starting：启动中
         * - stopping：停止中
         * - stopped：已停止
         * @example `running`
         */
        status: string;
        /**
         * ECS上各采集器的状态。支持：
         * - heartOk：心跳正常
         * - heartLost：心跳异常
         * - uninstalled：未安装
         * - failed：安装失败
         * @example `heartOk`
         */
        agentStatus: string;
        /**
         * ECS实例的标签信息。
         */
        tags: {
            /**
             * 标签键。
             * @example `abc`
             */
            tagKey: string;
            /**
             * 标签值。
             * @example `xyz`
             */
            tagValue: string;
        }[];
        /**
         * ECS实例的IP信息列表。
         */
        ipAddress: {
            /**
             * IP地址类型。支持：
             * - public：公网IP地址
             * - private：私网IP地址
             * @example `public`
             */
            ipType: string;
            /**
             * IP地址。
             * @example `192.168.xx.xx`
             */
            host: string;
        }[];
    }[];
}
