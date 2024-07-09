export interface GetJobInstanceResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `jobId=xxx is not existed`
     */
    Message: string;
    /**
     * 请求唯一id
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 获取任务实例详情是否成功。取值如下：
     * - **true**：获取任务实例详情成功。
     * - **false**：获取任务实例详情失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * instance信息
     */
    Data: {
        /**
         * 任务实例详细信息
         */
        JobInstanceDetail: {
            /**
             * 实例状态。包含以下几种状态：
             * - **1**：等待
             * - **3**：运行中
             * - **4**：成功
             * - **5**：失败
             * - **9**：拒绝
             * 对应枚举类：
             * com.alibaba.schedulerx.common.domain.InstanceStatus
             * @example `4`
             */
            Status: number;
            /**
             * 实例进度详情
             * @example `{"taskProgress":[{"name":"MAP_TASK_ROOT","total":1,"pulled":1,"running":0,"success":0,"failed":0}],"workerProgress":[{"workerAddr":"11.122.241.245:34865","total":1,"pulled":1,"running":0,"success":0,"failed":0}]}`
             */
            Progress: string;
            /**
             * 实例执行结果
             * @example `{'TotalSize': 31, 'CurrentPage': 5, 'PageSize': 10}`
             */
            Result: string;
            /**
             * 实例id
             * @example `1189853849`
             */
            InstanceId: number;
            /**
             * 实例调度时间类型，包含以下几种时间类型：
             * - **cron**：1
             * - **fix_rate**：3
             * - **second_delay**：4
             * - **api**：100
             * 对应枚举类：com.alibaba.schedulerx.common.domain.TimeType
             * @example `1`
             */
            TimeType: number;
            /**
             * 触发类型，包含以下几种触发类型：
             * - **1**：定时调度正常触发
             * - **2**：数据重刷
             * - **3**：API触发
             * - **4**：用户手动点击重跑
             * - **5**：系统重试（系统异常，如DB异常）
             * 对应枚举类：com.alibaba.schedulerx.common.domain.TriggerType
             * @example `1`
             */
            TriggerType: number;
            /**
             * 任务执行结束时间
             * @example `2020-07-27 11:52:10`
             */
            EndTime: string;
            /**
             * 任务执行开始时间
             * @example `2020-07-27 11:52:10`
             */
            StartTime: string;
            /**
             * 执行人
             * @example `张三
            `
             */
            Executor: string;
            /**
             * 任务id
             * @example `92583`
             */
            JobId: number;
            /**
             * 计划调度时间
             * @example `2020-07-27 11:52:10`
             */
            ScheduleTime: string;
            /**
             * 任务数据时间
             * @example `2020-07-27 11:52:10`
             */
            DataTime: string;
            /**
             * 被触发客户端ip:port
             * @example `192.168.0.0:16`
             */
            WorkAddr: string;
            /**
             * 任务运行实例参数信息。
             * @example `{\"alertId\":11111}`
             */
            Parameters: string;
            /**
             * 任务名称
             * @example `ManualJob`
             */
            JobName: string;
            /**
             * 调用链ID，可用于精确查询调用信息。
             * @example `210e845016596663430048015d0a2c`
             */
            TraceId: string;
        };
    };
}
