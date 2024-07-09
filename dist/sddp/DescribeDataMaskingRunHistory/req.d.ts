export interface DescribeDataMaskingRunHistoryRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 脱敏任务的编号。
     * @example `mt4HBgtw1B******`
     */
    "TaskId"?: string;
    /**
     * 按任务执行的起始时间查询，时间戳毫秒格式。
     * @example `1582992000000`
     */
    "StartTime"?: number;
    /**
     * 按任务执行的结束时间查询，时间戳毫秒格式。
     * @example `1583856000000`
     */
    "EndTime"?: number;
    /**
     * 任务执行状态：
     * - **-1**：等待执行。
     * - **0**：执行中。
     * - **1**：执行成功。
     * - **2**：执行失败。
     * - **3**：用户终止。
     * - **4**：部分失败。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 脱敏数据所属的源产品类型，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `2`
     */
    "SrcType"?: number;
    /**
     * 数据脱敏后放置的目标产品类型，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `2`
     */
    "DstType"?: number;
    /**
     * 列表每页显示的最大数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 主任务ID。
     * >包含子任务的时候该参数值为当前任务ID否则为空。
     * @example `366731`
     */
    "MainProcessId"?: number;
    /**
     * 源表的表名。
     * @example `add`
     */
    "SrcTableName"?: string;
}
