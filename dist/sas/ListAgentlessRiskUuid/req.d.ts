export interface ListAgentlessRiskUuidRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例名称
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
     * 检测对象的名称。
     * @example `source-test-obj-0****
    `
     */
    "TargetName"?: string;
    /**
     * 是否有风险。取值：
     * - **true**：存在
     * - **false**：不存在
     * @example `true`
     */
    "Risk"?: boolean;
    "TargetType"?: number;
    "InstanceId"?: string;
    "InstanceName"?: string;
}
