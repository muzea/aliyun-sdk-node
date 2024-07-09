export interface DescribeHybridMonitorTaskListRequest {
    /**
     * 搜索关键字。
     * @example `task`
     */
    "Keyword"?: string;
    /**
     * 监控任务ID。
     * @example `36****`
     */
    "TaskId"?: string;
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `3607****`
     */
    "GroupId"?: string;
    /**
     * 指标仓库名称。
     * 关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
     * @example `aliyun`
     */
    "Namespace"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 返回结果是否包含阿里云产品的数据接入任务。取值：
     * - true（默认值）：包含。
     * - false：不包含。
     * @example `true`
     */
    "IncludeAliyunTask"?: boolean;
    /**
     * 监控任务类型。取值：
     * - aliyun_fc：阿里云产品的数据接入任务。
     * - aliyun_sls：SLS日志的监控项。
     * @example `aliyun_fc`
     */
    "TaskType"?: string;
    /**
     * 成员ID。
     * > 仅当您通过管理账号调用本接口删除成员的阿里云数据接入任务（即`TaskType`为`aliyun_fc`）时，需要设置该参数。
     * @example `120886317861****`
     */
    "TargetUserId"?: number;
}
