export interface ListCheckInstanceResultRequest {
    /**
     * 检查项ID。
     * @example `23`
     */
    "CheckId": number;
    /**
     * 检查项的状态集合。
     */
    "Statuses"?: string[];
    /**
     * 检查项实例ID。
     * @example `i-uf64w4q6p9jti5gl****`
     */
    "InstanceIdKey"?: string;
    /**
     * 检查项实例名称。
     * @example `i-uf64w4q6p9jti5gl****
    `
     */
    "InstanceNameKey"?: string;
    /**
     * 实例所在的地域ID。
     * @example `cn-qingdao`
     */
    "RegionIdKey"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数，最大100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 需要查询的云产品实例ID集合。
     */
    "InstanceIds"?: string[];
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查项的排序类型列表。
     */
    "SortTypes"?: string[];
}
