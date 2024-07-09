export interface GetJobInstanceListResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息，仅错误时返回错误信息。
     * @example `jobid: 92583 not match groupId: testSchedulerx.defaultGroup`
     */
    Message: string;
    /**
     * 请求唯一ID
     * @example `704A2A61-3681-5568-92F7-2DFCC53F33D1`
     */
    RequestId: string;
    /**
     * 获取任务的执行实例列表是否成功。取值如下：
     * - **true**：获取任务的执行实例列表成功。
     * - **false**：获取任务的执行实例列表失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * instance列表
     */
    Data: {
        /**
         * 任务实例详细信息
         */
        JobInstanceDetails: {
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
             */
            Progress: string;
            /**
             * 实例执行结果
             */
            Result: string;
            /**
             * 实例ID
             * @example `1042499986`
             */
            InstanceId: number;
            /**
             * 实例调度时间类型，包含以下几种类型：
             * - **cron**：1
             * - **fix_rate**：3
             * - **second_delay**： 4
             * - **api**：100
             * 对应枚举类：com.alibaba.schedulerx.common.domain.TimeType
             * @example `1`
             */
            TimeType: number;
            /**
             * 触发类型，包含以下几种触发类型：
             * - **1**: 定时调度正常触发
             * - **2**：数据重刷
             * - **3**：API触发
             * - **4**：用户手动点击重跑
             * - **5**：系统重试（系统异常，如DB异常）
             * 对应枚举类：com.alibaba.schedulerx.common.domain.TriggerType
             * @example `3`
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
             * @example `A`
             */
            Executor: string;
            /**
             * 任务ID
             * @example `92583`
             */
            JobId: number;
            /**
             * 任务调度时间
             * @example `2020-07-27 11:52:10`
             */
            ScheduleTime: string;
            /**
             * 数据时间
             * @example `2020-07-27 11:52:10`
             */
            DataTime: string;
            /**
             * 被触发客户端ip:port
             * @example `192.168.0.0:16`
             */
            WorkAddr: string;
        }[];
    };
}
