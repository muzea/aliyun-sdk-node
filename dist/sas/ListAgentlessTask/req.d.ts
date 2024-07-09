export interface ListAgentlessTaskRequest {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 扫描对象类型。取值：
     * - **1**：快照
     * - **2**：镜像
     * @example `1`
     */
    "TargetType"?: number;
    /**
     * 主任务ID。
     * @example `12c27343861610c5db3f7a2573b4****`
     */
    "RootTaskId"?: string;
    /**
     * 检测状态。
     * - **1**：检测中
     * - **2**：完成
     * - **3**：失败
     * - **4**：超时
     * @example `2`
     */
    "Status"?: number;
    /**
     * 开始时间的时间戳。
     * @example `1651290987000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳。
     * @example `1635575219000`
     */
    "EndTime"?: number;
    /**
     * 是否查询主任务列表，取值：
     * - **true**：主任务
     * - **false**：子任务
     * @example `false`
     */
    "RootTask"?: boolean;
    /**
     * 如果查询主任务下的子任务列表，需要指定主任务ID。
     * @example `d7b2acf8d362742123e4a84e1bf8****`
     */
    "TaskId"?: string;
    /**
     * 实例名称。
     * @example `oracle-win-001****`
     */
    "MachineName"?: string;
    /**
     * 要查询资产的公网IP地址。
     * @example `1.1.XX.XX`
     */
    "InternetIp"?: string;
    /**
     * 要查询资产的私网IP地址。
     * @example `172.26.XX.XX`
     */
    "IntranetIp"?: string;
    /**
     * 指定要查询的服务器UUID。
     * @example `e4af3620-6895-4e2f-a641-a9d8fb53****`
     */
    "Uuid"?: string;
    /**
     * 检测对象的名称。
     * @example `source-test-obj-0****
    `
     */
    "TargetName"?: string;
    /**
     * 语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
