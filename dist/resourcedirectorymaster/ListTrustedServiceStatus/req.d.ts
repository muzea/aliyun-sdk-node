export interface ListTrustedServiceStatusRequest {
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 企业管理账号或委派管理员账号。取值：
     * - 企业管理账号（默认值）：查询企业管理账号已启用的可信服务列表。
     * - 委派管理员账号：查询委派管理员账号已启用的可信服务列表。
     * 关于可信服务和委派管理员的更多信息，请参见[可信服务概述](~~208133~~)和[管理委派管理员账号](~~208117~~)。
     * @example `177242285274****`
     */
    "AdminAccountId"?: string;
}
