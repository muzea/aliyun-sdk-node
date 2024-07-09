export interface DescribeEmgVulItemResponse {
    /**
     * 从返回结果中的第几页开始显示。起始值为**1**。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BC1868ED-A0E1-4D1C-BF7E-10DC0C34B3C3`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的应急漏洞信息的数量。默认值为**10**，表示每页显示10条应急漏洞信息。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的应急漏洞总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 查询到的应急漏洞信息。
     */
    GroupedVulItems: {
        /**
         * 漏洞检测状态。取值：
         * - **10**：未检测
         * - **20**：检测中
         * - **30**：已完成检测
         * @example `30`
         */
        Status: number;
        /**
         * 漏洞的检测方式。取值：
         * - **python**：版本检测（服务器软件版本检测）。检测您的服务器是否存在已披露的软件漏洞。
         * - **scan**：网络扫描（网络流量检测）。检测您的公网资产（即公网可访问的服务器）是否存在漏洞。
         * @example `scan`
         */
        Type: string;
        /**
         * 检查类型。
         * @example `1`
         */
        CheckType: number;
        /**
         * 最近一次检测漏洞的时间戳，单位为毫秒。
         * @example `1619286031000`
         */
        GmtLastCheck: number;
        /**
         * 漏洞检测进度。取值范围：0~100。
         * > 只有检测状态为检测中的应急漏洞会展示该参数。
         * @example `50`
         */
        Progress: number;
        /**
         * 漏洞发布时间戳，单位为毫秒。
         * @example `1618887687000`
         */
        GmtPublish: number;
        /**
         * 待处理漏洞数。
         * @example `0`
         */
        PendingCount: number;
        /**
         * 漏洞名称。
         * @example `Changjietong T + SetupAccount/Upload.aspx file Upload vulnerability (CNVD-2022-60632)`
         */
        AliasName: string;
        /**
         * 扫描规则名称。
         * @example `scan:AVD-2021-179344`
         */
        Name: string;
        /**
         * 支持RASP实时防护，取值：
         * - **0**：不支持
         * - **1**：支持
         * > 无该属性也表示不支持。
         * @example `1`
         */
        RaspDefend: number;
    }[];
}
