export interface DescribeGatherStatsResultResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `D208107C-B729-4C92-80EE-7257131*****`
     */
    RequestId: string;
    /**
     * 日志收集结果信息
     */
    GatherStatsResult: {
        /**
         * 变更信息
         */
        Change: {
            /**
             * 变更是否被停止
             * @example `false`
             */
            ChangePaused: boolean;
            /**
             * 变更描述信息
             * @example `gather stats of env we-5d3eaaea2977ca5251e***** on [\"{\\\"targetInstances\\\":\\\"i-wz94zz7mx8kt5kz*****\\\"}\"]`
             */
            ChangeDescription: string;
            /**
             * 变更完成时间
             * @example `1564554426063`
             */
            FinishTime: number;
            /**
             * 上次更新时间
             * @example `1564554426111`
             */
            UpdateTime: number;
            /**
             * 变更是否超时
             * @example `false`
             */
            ChangeTimedout: boolean;
            /**
             * 变更开始时间
             * @example `1564554425575`
             */
            CreateTime: number;
            /**
             * 变更消息
             * @example `""`
             */
            ChangeMessage: string;
            /**
             * 变更动作名称
             * @example `GatherStats`
             */
            ActionName: string;
            /**
             * 变更是否完成
             * @example `true`
             */
            ChangeFinished: boolean;
            /**
             * 变更创建者
             * @example `user1`
             */
            CreateUsername: string;
            /**
             * 变更是否成功
             * @example `true`
             */
            ChangeSucceeded: boolean;
            /**
             * 变更ID
             * @example `wc-5d4134b956fd7c14ac9*****`
             */
            ChangeId: string;
            /**
             * 变更是否被终止
             * @example `false`
             */
            ChangeAborted: boolean;
            /**
             * 环境ID
             * @example `we-5d3eaaea2977ca5251e*****`
             */
            EnvId: string;
            /**
             * 变更名称
             * @example `gather.stats`
             */
            ChangeName: string;
        };
        InstanceResults: {
            /**
             * 实例结果信息
             */
            InstanceResult: {
                /**
                 * 任务消息
                 * @example `""`
                 */
                TaskMessage: string;
                /**
                 * 存储key
                 * @example `""`
                 */
                StorageKey: string;
                /**
                 * 实例ID
                 * @example `""`
                 */
                InstanceId: string;
                /**
                 * 任务是否完成
                 * @example `true`
                 */
                TaskSucceeded: boolean;
            }[];
        };
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
