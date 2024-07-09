export interface DescribeActiveOperationTaskResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `2E1FF0CC-F42A-4B6F-A1F4-A17B1451****`
     */
    RequestId: string;
    /**
     * 每页可展示的最大记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 运维任务列表。
     */
    Items: {
        /**
         * 任务状态，返回值：
         * * **2**：等待用户指定时间。
         * * **3**：等待处理。
         * * **4**：处理中。进入此状态后，不可调用[ModifyActiveOperationTask](~~197384~~)修改计划切换时间。
         * * **5**：成功。
         * * **6**：失败。
         * * **7**：已取消。
         * @example `5`
         */
        Status: number;
        /**
         * 运维任务执行时间可调整范围的最晚期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-03-29T13:59:59Z`
         */
        Deadline: string;
        /**
         * 运维任务开始时间到切换时间之间所需的准备时间，格式为<i>HH:mm:ss</i>。
         * @example `14:00:00`
         */
        PrepareInterval: string;
        /**
         * 任务类型，返回值：
         * - **rds\_apsaradb\_ha**：主从节点切换。
         * - **rds\_apsaradb\_transfer**：实例迁移。
         * - **rds\_apsaradb\_upgrade**：小版本升级。
         * - **all**：所有任务类型。
         * @example `rds_apsaradb_upgrade`
         */
        TaskType: string;
        /**
         * 运维任务执行的时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-03-20T02:40:00Z`
         */
        StartTime: string;
        /**
         * 运维任务修改时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-02-24T08:18:53Z`
         */
        ModifiedTime: string;
        /**
         * Redis实例ID。
         * @example `r-bp1lgal1sdvxrz****`
         */
        InsName: string;
        /**
         * 数据库类型，返回值：**redis**。
         * @example `redis`
         */
        DbType: string;
        /**
         * 地域ID。
         * @example `cn-hanghzou`
         */
        Region: string;
        /**
         * 运维任务的创建时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-02-24T06:00:11Z`
         */
        CreatedTime: string;
        /**
         * 运维任务ID。
         * @example `1****1`
         */
        Id: number;
        /**
         * 系统发起的切换操作的时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-03-20T03:10:00Z`
         */
        SwitchTime: string;
    }[];
}
