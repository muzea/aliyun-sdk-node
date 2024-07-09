export interface DescribeScalingActivitiesResponse {
    /**
     * 请求ID。
     * @example `CC107349-57B7-4405-B1BF-9BF5AF7F****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 伸缩活动总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 伸缩活动信息组成的集合。
     */
    ScalingActivities: {
        /**
         * 伸缩活动的运行进度。
         * @example `100`
         */
        Progress: number;
        /**
         * - 如果伸缩活动类型为扩容，该参数表示本次伸缩活动中被创建或从停机回收状态启动的实例的个数。
         * - 如果伸缩活动类型为缩容，该参数表示本次伸缩活动中被删除或进入停机回收状态的实例的个数。
         * @example `1`
         */
        ScalingInstanceNumber: number;
        /**
         * 执行完伸缩活动后，伸缩组中通过手动添加的实例总数。
         * @example `0`
         */
        AttachedCapacity: string;
        /**
         * 执行完伸缩活动后，伸缩组中实例的总数。
         * @example `2`
         */
        TotalCapacity: string;
        /**
         * 伸缩组的ID。
         * @example `asg-bp18p2yfxow2dloq****`
         */
        ScalingGroupId: string;
        /**
         * 执行完伸缩活动后，伸缩组中由伸缩组负责自动创建的实例的总数。
         * @example `2`
         */
        AutoCreatedCapacity: string;
        /**
         * 伸缩活动的结束时间。
         * @example `2020-09-10T09:54Z`
         */
        EndTime: string;
        /**
         * 伸缩活动的开始时间。
         * @example `2020-09-10T09:54Z`
         */
        StartTime: string;
        /**
         * 伸缩活动的描述信息。
         * @example `Add \"1\" ECS instance`
         */
        Description: string;
        /**
         * 伸缩活动的状态，可能值：
         *
         * - Successful：执行成功的伸缩活动。
         * - Warning：部分执行成功的伸缩活动。
         * - Failed：执行失败的伸缩活动。
         * - InProgress：正在执行的伸缩活动。
         * - Rejected：执行伸缩活动请求被拒绝。
         * @example `Successful`
         */
        StatusCode: string;
        /**
         * 触发伸缩活动的原因。
         * @example `A user requests to execute scaling rule \"asr-bp12tcnol686y1ik****\", changing the Total Capacity from \"1\" to \"2\".`
         */
        Cause: string;
        /**
         * 伸缩活动的ID。
         * @example `asa-bp161xudmuxdzofe****`
         */
        ScalingActivityId: string;
        /**
         * 伸缩活动的状态信息。
         * @example `\"1\" ECS instances are added`
         */
        StatusMessage: string;
        /**
         * 当前伸缩活动新建的实例数量。
         * @example `1`
         */
        CreatedCapacity: number;
        /**
         * 当前伸缩活动释放的实例数量。
         * @example `1`
         */
        DestroyedCapacity: number;
        /**
         * 当前伸缩活动从停机不收费状态启动的实例数量。
         * @example `1`
         */
        StartedCapacity: number;
        /**
         * 当前伸缩活动进入停机不收费状态的实例数量。
         * @example `1`
         */
        StoppedCapacity: number;
        /**
         * 当前伸缩活动新建实例列表。
         */
        CreatedInstances: string[];
        /**
         * 当前伸缩活动释放实例列表。
         */
        DestroyedInstances: string[];
        /**
         * 当前伸缩活动启动的停机不收费实例列表。
         */
        StartedInstances: string[];
        /**
         * 当前伸缩活动进入停机不收费状态实例列表。
         */
        StoppedInstances: string[];
        /**
         * 伸缩活动失败时的错误码。
         * @example `OperationDenied.NoStock`
         */
        ErrorCode: string;
        /**
         * 伸缩活动失败时的错误信息。
         * @example `The specified ECS resource is out of stock in this region. Please try again later.`
         */
        ErrorMessage: string;
        /**
         * 伸缩活动详细信息。
         * @example `"new ECS instances "i-j6c8ilerw, i-j6c8iler4mx" are created."`
         */
        Detail: string;
        /**
         * 伸缩活动触发源类型。可能值：
         * - Cms：通过报警任务触发伸缩活动。
         * - Api：用户通过API方式触发伸缩活动。
         * - Ess：系统任务触发伸缩活动。
         * @example `Api`
         */
        TriggerSourceType: string;
        /**
         * 伸缩活动触发源ID。可能值：
         * - Cms触发源ID：显示为报警任务ID。
         * - Api触发源ID：显示为主账号UID或子账号UID。
         * - Ess触发源ID：显示为空。
         * @example `2346366580*****`
         */
        TriggerSourceId: string;
        /**
         * 生命周期挂钩上下文信息。
         */
        LifecycleHookContext: {
            /**
             * 伸缩活动是否禁用所有生命周期挂钩。可能值：
             * - true：禁用。
             * - false：不禁用。
             * @example `false`
             */
            DisableLifecycleHook: boolean;
            /**
             * 伸缩活动禁用的生命周期挂钩ID列表。
             */
            IgnoredLifecycleHookIds: string[];
        };
        /**
         * 伸缩活动的元数据。
         * @example `{\"goatscaler.io/managed\":\"true\"}`
         */
        ActivityMetadata: string;
    }[];
}
