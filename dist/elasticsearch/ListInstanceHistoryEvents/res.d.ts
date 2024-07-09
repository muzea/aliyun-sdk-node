export interface ListInstanceHistoryEventsResponse {
    /**
     * 请求ID。
     * @example `D1A6830A-F59B-4E05-BFAC-9496C21DBBA7`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 总记录数。
         * @example `15`
         */
        X-Total-Count: number;
        /**
         * 总失败数。
         * @example `2`
         */
        X-Total-Failed: number;
        /**
         * 总成功数。
         * @example `13`
         */
        X-Total-Success: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 事件创建时间。
         * @example `2017-12-07T00:00:00Z`
         */
        eventCreateTime: string;
        /**
         * 事件状态，支持：
         * - FAILED：失败
         * - EXECUTED：已执行
         * - EXECUTING：执行中
         * @example `EXECUTED`
         */
        eventCycleStatus: string;
        /**
         * 事件执行时间。
         * @example `2017-12-07T00:00:00Z`
         */
        eventExecuteTime: string;
        /**
         * 事件完成时间。
         * @example `2017-12-07T00:00:00Z`
         */
        eventFinashTime: string;
        /**
         * 事件等级，支持：
         * - INFO：信息
         * - WARN：警告
         * - CRITICAL：紧急
         * @example `INFO`
         */
        eventLevel: string;
        /**
         * 实例ID。
         * @example `es-cn-2r42l7a740005****`
         */
        instanceId: string;
        /**
         * 产生事件的节点的IP地址。
         * @example `10.1.xx.xx`
         */
        nodeIP: string;
        /**
         * 事件类型，支持：
         * - ECS:AUTO_RESTART：ECS节点自动重启。
         * - Instance:InstanceFailure.Reboot:Executed：ECS实例重启结束（ECS实例错误）。
         * - Instance:InstanceFailure.Reboot:Executing：ECS实例重启开始（实例错误）。
         * - Instance:SystemFailure.Reboot:Executed：ECS实例重启结束（系统错误）。
         * - Instance:SystemFailure.Reboot:Executing：ECS实例重启开始（系统错误）。
         * - Instance:SystemFailure.Reboot:Failed：ECS实例重启失败（系统错误）。
         * @example `ECS:AUTO_RESTART`
         */
        eventType: string;
        /**
         * 事件所在的地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * ECS实例ID。
         * @example `i-2ze8s9cjdf2cv969****`
         */
        ecsId: string;
    }[];
}
