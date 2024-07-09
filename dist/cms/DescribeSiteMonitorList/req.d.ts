export interface DescribeSiteMonitorListRequest {
    /**
     * 站点监控任务ID。
     * @example `a1ecd34a-8157-44d9-b060-14950837****`
     */
    "TaskId"?: string;
    /**
     * 站点监控任务探测类型。云监控支持的探测类型包括：HTTP 、PING 、TCP 、UDP 、DNS 、SMTP 、POP3 、FTP。
     * @example `HTTP`
     */
    "TaskType"?: string;
    /**
     * 查询站点监控任务的关键字。
     * > 支持根据任务名称或任务地址模糊搜索。
     * @example `site`
     */
    "Keyword"?: string;
    /**
     * 分页页码。默认值：1。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 每页显示条数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 任务状态。取值：
     * - 1：正常。
     * - 2：禁用。
     * @example `1`
     */
    "TaskState"?: string;
}
