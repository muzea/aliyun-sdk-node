export interface DescribeInternetOpenIpRequest {
    /**
     * 接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 查询的应用名称。
     * @example `SSH`
     */
    "ServiceName"?: string;
    /**
     * 风险等级，不填为全部风险等级。取值：
     * - **3**：高风险
     * - **2**：中风险
     * - **1**：低风险
     * - **0**：无风险
     * @example `2`
     */
    "RiskLevel"?: string;
    /**
     * 端口号。
     * @example `80`
     */
    "Port"?: string;
    /**
     * 实例ID。
     * @example `i-uf6faknmuby7ezht****`
     */
    "AssetsInstanceId"?: string;
    /**
     * 实例名称。
     * @example `launch-advisor-2023****`
     */
    "AssetsInstanceName"?: string;
    /**
     * 实例的公网IP。
     * @example `203.0.113.1`
     */
    "PublicIp"?: string;
    /**
     * 实例所在的地域ID。
     * @example `cn-shanghai`
     */
    "RegionNo"?: string;
    /**
     * 实例的资产类型。
     * @example `EcsEIP`
     */
    "AssetsType"?: string;
    /**
     * 公网IP暴露的开始时间。使用秒级时间戳格式表示。
     * @example `1681957629`
     */
    "StartTime"?: string;
    /**
     * 公网IP暴露的结束时间。使用秒级时间戳格式表示。
     * @example `1663640336`
     */
    "EndTime"?: string;
    /**
     * 设置分页查询时的页码。
     * @example `1`
     */
    "CurrentPage": string;
    /**
     * 设置分页查询每页包含多少条结果。
     * @example `10`
     */
    "PageSize": string;
}
