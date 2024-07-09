export interface DescribeActiveOperationTasksRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 任务类型，all代表查询该用户下所有的任务，固定取值为all。
     * @example `all`
     */
    "TaskType"?: string;
    /**
     * 产品名， 默认值为polarx。
     * @example `polarx`
     */
    "ProductId"?: string;
    /**
     * 数据库类型，固定值：polarx。
     * @example `polarx`
     */
    "DbType"?: string;
    /**
     * 实例名，默认为空字符串。
     * @example `pxc-xxxxx`
     */
    "InsName"?: string;
    /**
     * 变更级别，默认all：
     * - **all**：选择全部异常修复和系统运维的级别
     * - **S0**：异常修复
     * - **S1**：系统运维
     * @example `all`
     */
    "ChangeLevel"?: string;
    /**
     * 每页记录数, 默认每页25条。
     * @example `25`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务状态，取值：
     * - **-1**：选择全部待执行和执行中的任务
     * - **3**：待执行
     * - **4**：执行中
     * @example `-1`
     */
    "Status"?: number;
    /**
     * 是否允许修改时间，取值：
     * - **-1**：允许修改全部运维事件的时间
     * - **0**：不允许
     * - **1**：允许
     * @example `-1`
     */
    "AllowChange"?: number;
    /**
     * 是否允许取消，取值：
     * - **-1**：允许取消全部运维事件
     * - **0**：不允许
     * - **1**：允许
     * @example `-1`
     */
    "AllowCancel"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
