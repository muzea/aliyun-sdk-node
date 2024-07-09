export interface ModifyAutoDelConfigRequest {
    /**
     * 设置失效漏洞自动删除的时间。取值：
     * - 7天
     * - 30天
     * - 90天
     * @example `30`
     */
    "Days"?: number;
}
