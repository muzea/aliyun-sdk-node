export interface DescribeBackupPoliciesRequest {
    /**
     * 要查询的防勒索防护策略的名称。
     * @example `SecurityStrategy-20200303`
     */
    "Name"?: string;
    /**
     * 要查询的防勒索策略防护的服务器的识别信息。可输入服务器的IP地址或实例ID。
     * @example `1.1.XX.XX`
     */
    "MachineRemark"?: string;
    /**
     * 防勒索防护策略的状态。
     * - **enabled**：策略已手动启用。
     * - **disabled**：策略已手动停用。策略停用后，正在运行的备份任务将停止。
     * - **closed**：防勒索容量超出，系统停用策略。
     * @example `enabled`
     */
    "Status"?: string;
    /**
     * 设置分页查询时，每页包含的备份策略的数量。默认值为10，表示每页包含10个防护策略。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设置从返回结果的第几页开始显示。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
}
