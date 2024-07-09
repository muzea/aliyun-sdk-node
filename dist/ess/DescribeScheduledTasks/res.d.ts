export interface DescribeScheduledTasksResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 定时任务总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 定时任务信息组成的集合。
     */
    ScheduledTasks: {
        /**
         * 是否启动定时任务。
         * - true：启动任务。
         * - false：停止任务 。
         * 默认值：true。
         * @example `true`
         */
        TaskEnabled: boolean;
        /**
         * 重复触发定时任务的数值。
         * @example `1`
         */
        RecurrenceValue: string;
        /**
         * 重复触发定时任务的类型。
         * @example `Daily`
         */
        RecurrenceType: string;
        /**
         * 定时任务的`伸缩方式`选择`伸缩组内实例数量设置`时，指定伸缩组内实例的最大数量。
         * @example `10`
         */
        MaxValue: number;
        /**
         * 定时任务的名称。
         * @example `scheduled****`
         */
        ScheduledTaskName: string;
        /**
         * 重复触发定时任务的结束时间。
         * @example `2014-08-20T16:55Z`
         */
        RecurrenceEndTime: string;
        /**
         * 定时任务的`伸缩方式`选择`伸缩组内实例数量设置`时，指定伸缩组内实例的期望实例数。
         * @example `10`
         */
        DesiredCapacity: number;
        /**
         * 定时任务的ID。
         * @example `edRtShc57WGXdt8TlPbr****`
         */
        ScheduledTaskId: string;
        /**
         * 定时任务的`伸缩方式`选择`伸缩组内实例数量设置`时，指定伸缩组内实例的最小数量。
         * @example `0`
         */
        MinValue: number;
        /**
         * 执行定时任务的伸缩组的ID。
         * @example `asg-bp1bo5tca4m56nap****`
         */
        ScalingGroupId: string;
        /**
         * 定时任务触发操作失败后，在此时间内重试。单位为秒，取值范围：0~21600。
         * @example `600`
         */
        LaunchExpirationTime: number;
        /**
         * 定时任务的描述信息。
         * @example `Test scheduled task.`
         */
        Description: string;
        /**
         * 执行定时任务时使用的伸缩规则。仅当定时任务指定了伸缩规则时，返回该参数。
         * @example `ari:acs:ess:cn-hangzhou:1406926474****:scalingrule/asr-bp1id5rhu8edp7kd****`
         */
        ScheduledAction: string;
        /**
         * 定时任务触发的时间点。
         * @example `2014-08-18T10:52Z`
         */
        LaunchTime: string;
    }[];
}
