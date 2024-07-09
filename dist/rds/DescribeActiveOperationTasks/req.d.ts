export interface DescribeActiveOperationTasksRequest {
    /**
     * 待处理事件所属的地域ID，可调用DescribeRegions接口获取。
     * > 取值为**all**表示所有地域ID。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 任务类型，取值：
     * * **rds\_apsaradb\_ha**：主从节点切换。
     * * **rds\_apsaradb\_transfer**：实例迁移。
     * * **rds\_apsaradb\_upgrade**：小版本升级。
     * * **rds\_apsaradb\_maxscale**: 代理小版本升级。
     * *  **all**：所有任务类型。
     * @example `rds_apsaradb_upgrade`
     */
    "TaskType"?: string;
    /**
     * 每页记录数, 默认每页25条，最大100。
     * @example `25`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0, 默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 产品名称, RDS/POLARDB/MongoDB/Redis，对于RDS实例可选RDS。
     * @example `RDS`
     */
    "ProductId"?: string;
    /**
     * 数据库类型，默认为 all
     * 可选：mysql/pgsql/mssql 等
     * @example `all`
     */
    "DbType"?: string;
    /**
     * 任务状态，用于筛选返回任务。
     * * **-1**：全部任务。
     * * **3**：待处理任务。
     * * **4**：处理中任务。
     * * **5**：成功结束任务。
     * * **6**：失败结束任务。
     * * **7**：已取消任务。
     * @example `-1`
     */
    "Status"?: number;
    /**
     * 实例名，可不填，填写时只允许填写至多一个实例名。
     * @example `rm-bp191w771kd3****`
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
     * @example `-1`
     */
    "AllowCancel"?: number;
    /**
     * 任务级别，默认为 all，取值：
     * - **all**：全部
     * - **S0**：返回异常修复级别的任务。
     * - **S1**：返回系统运维级别的任务。
     * @example `all`
     */
    "ChangeLevel"?: string;
}
