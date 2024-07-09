export interface ListAutoScalingActivitiesResponse {
    /**
     * 伸缩活动列表。
     */
    ScalingActivities: {
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
         * 伸缩启动时间。单位为毫秒。
         * @example `1639714634819`
         */
        StartTime: number;
        /**
         * 伸缩结束时间。单位为毫秒。
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
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
