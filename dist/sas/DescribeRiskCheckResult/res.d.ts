export interface DescribeRiskCheckResultResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `AD271C07-4ACE-413D-AA9B-F14FD3B7717F`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的检查结果的数量。默认值为**20**，表示每页显示20条检查结果。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的检查结果数据的总条数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 查询到的检查结果数据的总页数。
     * @example `20`
     */
    PageCount: number;
    /**
     * 分页查询时，显示的当前页的数据条数。
     * @example `10`
     */
    Count: number;
    /**
     * 检查项信息列表。
     */
    List: {
        /**
         * 检查项的风险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `high`
         */
        RiskLevel: string;
        /**
         * 检查项检查状态。取值：
         * -  **pass**：通过
         * - **failed**：失败
         * - **running**：运行中
         * - **waiting**：等待运行
         * - **ignored**：已忽略
         * - **falsePositive**：已标记误报
         * @example `pass`
         */
        Status: string;
        /**
         * 检查项类型。取值：
         * <props="china">
         * - 身份认证及权限
         * - 网络访问控制
         * - 日志审计
         * - 数据安全
         * - 监控告警
         * - 基础安全防护
         * </props>
         * <props="intl">
         * - Identity and permissions
         * - Network access control
         * - Log audit
         * - Data Security
         * - Monitoring alarm
         * - Basic security protection
         * </props>
         * @example `Log audit`
         */
        Type: string;
        /**
         * 检查结果的排序序号。仅决定展示检查项的顺序。
         * @example `1`
         */
        Sort: number;
        /**
         * 配置检查项是否支持修复功能。取值：
         * - **enabled**：支持修复
         * - **disabled**：不支持修复
         * @example `disabled`
         */
        RepairStatus: string;
        /**
         * 预计下一次检查的时间。
         * @example `0`
         */
        RemainingTime: number;
        /**
         * 检查项ID。检查项ID及对应的风险检查项详细信息请参见本文档返回参数后的风险检查项表格。
         * @example `1`
         */
        ItemId: number;
        /**
         * 检查项启用状态。取值：
         * - **enabled**：用户所用的产品版本支持检测该检查项。
         * - **disable**：用户所用的产品版本不支持检测该检查项。
         * @example `enabled`
         */
        StartStatus: string;
        /**
         * 受影响的资产数量。
         * @example `0`
         */
        AffectedCount: number;
        /**
         * 受影响的资产类型。
         * @example `ECS`
         */
        RiskAssertType: string;
        /**
         * 检查项名称。
         * @example `RDS - Whitelist Configuration`
         */
        Title: string;
        /**
         * 检查任务的ID。
         * @example `15384933`
         */
        TaskId: number;
        /**
         * 最新检测的时间戳，单位为毫秒。
         * @example `1639429164000`
         */
        CheckTime: number;
        /**
         * 检查项的详情数据。
         */
        RiskItemResources: {
            /**
             * 检查结果详情。
             * @example `{   "type": "link",   "value": "未开启多因素认证，存在风险\n",   "url": "https://***.aliyun.com/#/secure\n" }`
             */
            ContentResource: any;
            /**
             * 详情的标题。取值：
             * - **bestPractice**：检查描述
             * - **influence**：威胁影响
             * - **suggestion**：指导方案
             * - **helpResource**：帮助资源
             * @example `bestPractice`
             */
            ResourceName: string;
        }[];
    }[];
}
