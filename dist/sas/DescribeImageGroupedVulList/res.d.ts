export interface DescribeImageGroupedVulListResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `2`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5E244439-UJND-8BF7-26F36E21B9AA`
     */
    RequestId: string;
    /**
     * 分页查询时，每页显示的镜像漏洞的数量。默认值为**20**，表示每页显示20条镜像漏洞数据。
     * @example `20`
     */
    PageSize: number;
    /**
     * 镜像系统漏洞的总数。
     * @example `21`
     */
    TotalCount: number;
    /**
     * 镜像漏洞的漏洞列表。
     */
    GroupedVulItems: {
        /**
         * 漏洞处理的状态。取值：
         * - **0**：未处理
         * - **1**：已处理
         * - **2**：验证中
         * - **3**：已加白
         * @example `0`
         */
        Status: number;
        /**
         * 要查询的漏洞的类型。取值：
         * - **cve**：镜像系统漏洞
         * - **sca**：镜像应用漏洞
         * @example `cve`
         */
        Type: string;
        /**
         * 低危漏洞数。
         * @example `29`
         */
        NntfCount: number;
        /**
         * 首次扫描的时间戳，单位为毫秒。
         * @example `1611201274000`
         */
        GmtLast: number;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1611201274000`
         */
        LastScanTime: number;
        /**
         * 漏洞的标签。取值：
         * <props="china">
         * - 需要重启
         * - 远程利用
         * - 存在EXP
         * - 可被利用
         * - 本地提权
         * - 代码执行
         * </props>
         * <props="intl">
         * - Restart required
         * - Remote utilization
         * - EXP exists
         * - Available
         * - Elevation of Privilege
         * - Code Execution
         * </props>
         * @example `EXP exists`
         */
        Tags: string;
        /**
         * 中危漏洞数。
         * @example `26`
         */
        LaterCount: number;
        /**
         * 漏洞的别名。
         * @example `RHSA-2017:3075-Important: wget security update`
         */
        AliasName: string;
        /**
         * 漏洞的名称。
         * @example `debian:9:CVE-2019-3858`
         */
        Name: string;
        /**
         * 高危漏洞数。
         * @example `26`
         */
        AsapCount: number;
        /**
         * 是否可支持修复。取值：
         * - **yes**：支持修复
         * - **no**： 不支持修复
         * @example `yes`
         */
        CanFix: string;
    }[];
}
