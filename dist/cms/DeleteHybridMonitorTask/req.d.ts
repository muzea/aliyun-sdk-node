export interface DeleteHybridMonitorTaskRequest {
    /**
     * 监控任务ID。
     * 关于如何获取监控任务ID，请参见[DescribeHybridMonitorTaskList](~~428624~~)。
     * > 当您删除SLS日志的监控项（即`TaskType`为`aliyun_sls`）时，必须设置该参数。
     * @example `36****`
     */
    "TaskId"?: string;
    /**
     * 指标仓库名称。
     * 格式：由大写字母、小写字母、数字和短划线（-）组成。
     * > 当您删除阿里云产品的数据接入任务（即`TaskType`为`aliyun_fc`）时，必须设置该参数。
     * @example `aliyun`
     */
    "Namespace"?: string;
    /**
     * 成员ID。
     * > 仅当您通过管理账号调用本接口删除成员的阿里云数据接入任务（即`TaskType`为`aliyun_fc`）时，需要设置该参数。
     * @example `120886317861****`
     */
    "TargetUserId"?: string;
}
