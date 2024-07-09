export interface ListFileProtectEventRequest {
    /**
     * 规则名称。
     * @example `test-rule-1`
     */
    "RuleName"?: string;
    /**
     * 事件状态。取值如下：
     * - 0： 未处理
     * - 1： 我已手工处理
     * - 2： 已加白
     * - 3： 已忽略
     * @example `2`
     */
    "Status"?: string;
    /**
     * 报警通知级别列表。
     */
    "AlertLevels"?: number[];
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 资产实例的ID。
     * @example `i-bp1g6wxdwps7s9dz****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的服务器的UUID。
     * >调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口可以获取该参数。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Uuid"?: string;
    /**
     * 指定要查询的服务器名称。
     * @example `ca_cpm_****`
     */
    "InstanceName"?: string;
    /**
     * 要查询资产的公网IP地址。
     * @example `120.27.XX.XX`
     */
    "InternetIp"?: string;
    /**
     * 要查询资产的私网IP地址。
     * @example `172.26.XX.XX`
     */
    "IntranetIp"?: string;
    /**
     * 开始时间的时间戳。
     * @example `1656038740435`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳。
     * @example `1683257937775`
     */
    "EndTime"?: number;
    /**
     * 对文件的操作类型。取值：
     * - **DELETE**： 对文件删除操作。
     * - **WRITE**：对文件写操作。
     * - **READ**：对文件读操作。
     * - **RENAME**：对文件重命名操作。
     * - **CHOWN**：设置文件所有者和文件关联组操作。
     * @example `READ`
     */
    "Operation"?: string;
}
