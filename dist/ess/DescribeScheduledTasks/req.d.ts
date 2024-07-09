export interface DescribeScheduledTasksRequest {
    /**
     * 定时任务所属伸缩组的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 定时任务列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：50。
     * 默认值：10。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 执行定时任务的伸缩组的ID。
     * @example `asg-bp1bo5tca4m56nap****`
     */
    "ScalingGroupId"?: string;
    /**
     * 仅当定时任务指定了伸缩规则时，定时任务触发时使用的伸缩规则。
     */
    "ScheduledActions"?: string[];
    /**
     * 待查询定时任务的ID。
     */
    "ScheduledTaskIds"?: string[];
    /**
     * 待查询定时任务的名称。
     */
    "ScheduledTaskNames"?: string[];
    /**
     * 任务名称，支持根据关键字模糊搜索。
     * @example `scheduled****`
     */
    "TaskName"?: string;
    /**
     * 重复执行定时任务的类型，取值范围：
     * - Daily：每多少天重复执行一次定时任务。
     * - Weekly：每周指定几天重复执行一次定时任务。
     * - Monthly：每月内指定几天重复执行一次定时任务。
     * - Cron：按照指定的Cron表达式执行定时任务。
     * @example `Weekly`
     */
    "RecurrenceType"?: string;
    /**
     * 重复执行定时任务的数值。
     * 仅支持当RecurrenceType为Weekly时指定此字段，可以填入多个值，填多个值时使用半角逗号（,）分隔。例如，周日、周一、周二、周三、周四、周五、周六的值依次为：0,1,2,3,4,5,6。
     * @example `1,2,3`
     */
    "RecurrenceValue"?: string;
    /**
     * 定时任务是否已启动。
     * - true：任务已启动。
     * - false：任务已停止。
     * @example `true`
     */
    "TaskEnabled"?: boolean;
}
