export interface GetAutoScalingActivityResponse {
    /**
     * 伸缩活动信息。
     */
    ScalingActivity: {
        /**
         * 伸缩活动ID。
         * @example `asa-36373b084d6b4b13aa50f4129a9e****`
         */
        ActivityId: string;
        /**
         * 伸缩规则名称。
         * @example `scaling-out-memory`
         */
        RuleName: string;
        /**
         * 伸缩规则详述。
         */
        RuleDetail: any;
        /**
         * 伸缩活动类型。取值范围：
         * - SCALE_OUT：扩容。
         * - SCALE_IN：缩容。
         * @example `SCALE_OUT`
         */
        ActivityType: string;
        /**
         * 集群ID。
         * @example `c-b933c5aac8fe****`
         */
        ClusterId: string;
        /**
         * 节点组ID。
         * @example `ng-869471354ecd****`
         */
        NodeGroupId: string;
        /**
         * 节点组名称。
         * @example `task-01`
         */
        NodeGroupName: string;
        /**
         * 伸缩启动时间。
         * @example `1639714634819`
         */
        StartTime: number;
        /**
         * 伸缩结束时间。
         * @example `1639715634819`
         */
        EndTime: number;
        /**
         * 伸缩活动状态。取值范围：
         * - REJECTED：拒绝。
         * - SUCCESSFUL：成功。
         * - FAILED：失败。
         * - IN_PROGRESS：进行中。
         * @example `IN_PROGRESS`
         */
        ActivityState: string;
        /**
         * 本次扩缩数量。
         * @example `10`
         */
        ExpectNum: number;
        /**
         * 操作ID。
         * @example `op-13c37a77c505****`
         */
        OperationId: string;
        /**
         * 伸缩活动描述。
         * @example `clusterId not exist`
         */
        Description: string;
        /**
         * 本次伸缩活动对应的实例列表。
         */
        ActivityResults: any[];
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
