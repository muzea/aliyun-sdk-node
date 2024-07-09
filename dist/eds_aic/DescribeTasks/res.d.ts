export interface DescribeTasksResponse {
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****`
     */
    NextToken: string;
    /**
     * 返回结果对象列表。
     */
    Data: {
        /**
         * 任务ID。
         * @example `t-bp67acfmxazb4p****`
         */
        TaskId: string;
        /**
         * 命令执行ID。
         * @example `B8ED2BA9-0C6A-5643-818F-B5D60A64****`
         */
        InvokeId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资源ID。
         * @example `acp-25nt4kk9whhok****`
         */
        ResourceId: string;
        /**
         * 任务类型。
         * @example `StartInstance`
         */
        TaskType: string;
        /**
         * 任务状态。
         * @example `Processing`
         */
        TaskStatus: string;
        /**
         * 任务开始时间。
         * @example `2022-10-11T08:53:32Z`
         */
        StartTime: string;
        /**
         * 任务结束时间。
         * @example `2022-10-11T08:53:32Z`
         */
        FinishTime: string;
    }[];
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `B8ED2BA9-0C6A-5643-818F-B5D60A64****`
     */
    RequestId: string;
}
