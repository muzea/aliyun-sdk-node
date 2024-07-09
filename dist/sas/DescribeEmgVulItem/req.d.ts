export interface DescribeEmgVulItemRequest {
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定要查询的漏洞风险状态。
     * 如果不设置该参数的取值，会默认返回全部风险状态的漏洞（包括存在风险和无风险）。取值：
     * - **y**：存在风险
     * - **n**：无风险
     * @example `y`
     */
    "RiskStatus"?: string;
    /**
     * 指定要查询的漏洞检测方式。
     * 如果不设置该参数的取值，会默认返回全部检测方式的漏洞（包括版本检测和网络扫描）。取值：
     * - **python**：版本检测（服务器软件版本检测）。检测您的服务器是否存在已披露的软件漏洞。
     * - **scan**：网络扫描（网络流量检测）。检测您的公网资产（即公网可访问的服务器）是否存在漏洞。
     * @example `python`
     */
    "ScanType"?: string;
    /**
     * 检测方式。取值：
     * - **0**：POC验证
     * - **1**：版本比对
     * @example `0`
     */
    "CheckType"?: number;
    /**
     * 指定要查询的应急漏洞名称。
     * @example `Changjietong T + SetupAccount/Upload.aspx file Upload vulnerability (CNVD-2022-60632)`
     */
    "VulName"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的应急漏洞信息的数量。默认值为**10**，表示每页显示10条应急漏洞信息，最大取值50。
     * @example `10`
     */
    "PageSize"?: number;
}
