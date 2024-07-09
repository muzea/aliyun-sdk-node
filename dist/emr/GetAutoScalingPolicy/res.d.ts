export interface GetAutoScalingPolicyResponse {
    /**
     * 弹性伸缩策略。
     */
    ScalingPolicy: {
        /**
         * 节点组ID。
         * @example `ng-869471354ecd****`
         */
        NodeGroupId: string;
        /**
         * 集群ID。
         * @example `c-b933c5aac8fe****`
         */
        ClusterId: string;
        /**
         * 伸缩规则列表
         */
        ScalingRules: {
            /**
             * 弹性伸缩规则名称。
             * @example `scaling-out-memory`
             */
            RuleName: string;
            /**
             * 伸缩规则类型。取值范围：
             * - TIME_TRIGGER：按时间伸缩。
             * - METRICS_TRIGGER：按负载伸缩。
             * @example `TIME_TRIGGER`
             */
            TriggerType: string;
            /**
             * 伸缩活动类型。取值范围：
             * - SCALE_OUT：扩容。
             * - SCALE_IN：缩容。
             * @example `SCALE_OUT`
             */
            ActivityType: string;
            /**
             * 调整类型。
             * @example `CHANGE_IN_CAPACITY`
             */
            AdjustmentType: string;
            /**
             * 调整值。需要为正数，代表需要扩容或者缩容的实例数量。
             * @example `100`
             */
            AdjustmentValue: number;
            /**
             * 按照时间伸缩描述。
             */
            TimeTrigger: any;
            /**
             * 按照负载伸缩描述。
             */
            MetricsTrigger: any;
        }[];
        /**
         * 伸缩策略ID。
         * @example `asp-asduwe23znl***`
         */
        ScalingPolicyId: string;
        /**
         * 节点组最大最小值约束。
         */
        Constraints: {
            /**
             * 节点组最大节点数。
             * 默认值：2000。
             * @example `2000`
             */
            MaxCapacity: number;
            /**
             * 节点组最小节点数。
             * 默认值：0。
             * @example `0`
             */
            MinCapacity: number;
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
