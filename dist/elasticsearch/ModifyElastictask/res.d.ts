export interface ModifyElastictaskResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 弹性节点扩容规则。
         */
        elasticExpansionTask: {
            /**
             * 触发条件。固定为crontab，表示定时触发。
             * @example `crontab`
             */
            triggerType: string;
            /**
             * 目标索引的副本数。
             * @example `2`
             */
            replicaCount: number;
            /**
             * 目标高峰期弹性数据节点数量。
             * @example `2`
             */
            elasticNodeCount: number;
            /**
             * 触发周期，使用Quartz Cron表达式。
             * @example `0 0 0 ? * MON`
             */
            cronExpression: string;
            targetIndices: string[];
        };
        /**
         * 弹性节点缩容规则。
         */
        elasticShrinkTask: {
            /**
             * 触发条件。可选值：crontab，表示定时触发。
             * @example `crontab`
             */
            triggerType: string;
            /**
             * 目标索引的副本数。
             * @example `2`
             */
            replicaCount: number;
            /**
             * 目标低峰期弹性数据节点数量。
             * @example `2`
             */
            elasticNodeCount: number;
            /**
             * 触发周期，使用Quartz Cron表达式。
             * @example `4 4 4 ? * WED`
             */
            cronExpression: string;
            targetIndices: string[];
        };
    };
}
