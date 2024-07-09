export interface GetHistoryAdvicesRequest {
    /**
     * 请求使用的语言。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 云产品Code。
     * @example `ecs`
     */
    "Product"?: string;
    /**
     * 严重级别：
     * - **1**:  警告
     * - **2**:  严重
     * @example `1`
     */
    "Severity"?: string;
    /**
     * 每页数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页号。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 时间范围查询条件起始时间，输入日期格式为 yyyy-mm-dd。
     * @example `2023-07-01`
     */
    "StartDate"?: string;
    /**
     * 时间范围查询条件结束时间，输入日期格式为 yyyy-mm-dd。
     * @example `2023-07-01
    `
     */
    "EndDate"?: string;
    /**
     * 是否降序：
     *   - **true**：按降序排序
     *   - **false**：按升序排序
     * @example `true`
     */
    "Reverse"?: boolean;
}
