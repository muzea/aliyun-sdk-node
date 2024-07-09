export interface DescribeGroupedVulResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9BFA6D78-07EA-5C0A-9358-E4434573507B`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的漏洞信息的数量。默认值为10，表示每页显示10条漏洞信息。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询结果的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 查询到的漏洞信息。
     */
    GroupedVulItems: {
        /**
         * 漏洞类型。取值：
         * - **cve**：Linux漏洞
         * - **sys**：Windows漏洞
         * - **cms**：WebCMS漏洞
         * - **app**：应用漏洞
         * - **emg**：应急漏洞
         * - **sca**：软件成分分析
         * @example `cve`
         */
        Type: string;
        /**
         * 修复优先级为**低**的漏洞的数量。
         * @example `59`
         */
        NntfCount: number;
        /**
         * 支持RASP实时防护，取值：
         * - **0**：不支持
         * - **1**：支持
         * > 无该属性也表示不支持。
         * @example `1`
         */
        RaspDefend: number;
        /**
         * 已处理的漏洞数量。
         * @example `0`
         */
        HandledCount: number;
        /**
         * 漏洞最后发现的时间戳，单位为毫秒。
         * @example `1639371446000`
         */
        GmtLast: number;
        /**
         * 漏洞标签。取值：
         * <props="china">
         * - **需要重启**
         * - **远程利用**
         * - **存在EXP**
         * - **可被利用**
         * - **本地提权**
         * - **代码执行**
         * </props>
         * <props="intl">
         * - **Restart required**
         * - **Remote utilization**
         * -  **EXP exists**
         * -  **Available**
         * - **Elevation of Privilege**
         * - **Code Execution**
         * </props>
         * @example `Code Execution`
         */
        Tags: string;
        /**
         * 修复优先级为**中**的漏洞的数量。
         * @example `0`
         */
        LaterCount: number;
        /**
         * 漏洞别名。
         * @example `RHSA-2017:0184-Important: mysql security update`
         */
        AliasName: string;
        /**
         * 漏洞名称。
         * @example `oval:com.redhat.rhsa:def:20170184`
         */
        Name: string;
        /**
         * 已修复漏洞的总数量。
         * @example `0`
         */
        TotalFixCount: number;
        /**
         * 修复优先级为**高**的漏洞的数量。
         * @example `0`
         */
        AsapCount: number;
        /**
         * 漏洞关联的CVE列表。
         * @example `CVE-2023-24881,CVE-2023-24898`
         */
        Related: string;
    }[];
}
