export interface DescribeActiveOperationTasksRequest {
    /**
     * 待处理事件所属的地域ID，可调用[DescribeRegions](~~61012~~)接口获取。
     * > 取值为**all**表示所有地域ID。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 任务类型，如果为空则查询所有类型。
     * @example `all`
     */
    "TaskType"?: string;
    /**
     * 分页大小，默认为25，最大 100。
     * @example `25`
     */
    "PageSize"?: number;
    /**
     * 页码，大于 0, 默认 1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 产品名称, RDS/POLARDB/MongoDB/Redis，对于 Redis 实例可选 Redis。
     * @example `Redis`
     */
    "ProductId"?: string;
    /**
     * 数据库类型：**redis**。
     * @example `redis`
     */
    "DbType"?: string;
    /**
     * 任务状态，用于筛选返回任务，取值：
     * * **-1**：全部任务。
     * * **3**：待处理任务。
     * * **4**：处理中任务。
     * * **5**：成功结束任务。
     * * **6**：失败结束任务。
     * * **7**：已取消任务。
     * @example `3`
     */
    "Status"?: number;
    /**
     * 实例名，可不填，填写时只允许填写至多一个实例名。
     * @example `r-wz96fzmpvpr2qnqnlb`
     */
    "InsName"?: string;
    /**
     * 是否允许修改时间，默认-1，取值：
     * - **-1**：全部。
     * - **0**：只返回不允许修改时间的任务。
     * - **1**：只返回允许修改时间的任务。
     * @example `-1`
     */
    "AllowChange"?: number;
    /**
     * 是否允许取消，默认-1，取值：
     * - **-1**：全部。
     * - **0**：只返回不允许取消的任务。
     * - **1**：只返回允许取消的任务。
     * @example `1`
     */
    "AllowCancel"?: number;
    /**
     * 变更级别，默认all：
     * - **all**：选择全部异常修复和系统运维的级别
     * - **S0**：异常修复
     * - **S1**：系统运维
     * @example `all`
     */
    "ChangeLevel"?: string;
}
