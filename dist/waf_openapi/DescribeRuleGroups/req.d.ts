export interface DescribeRuleGroupsRequest {
    /**
     * 请求源ip。无需填写，系统自动获取。
     * @example `60.208.*.*`
     */
    "SourceIp"?: string;
    /**
     * 返回消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 返回消息的语言类型。取值：
     * - **ZH**（默认）：中文
     * - **EN**：英文
     * @example `ZH`
     */
    "WafLang"?: string;
    /**
     * 规则组类型。取值：
     * - 默认空
     * - **10**：系统规则组
     * - **1**：自定义规则组
     * @example `10`
     */
    "Type"?: number;
    /**
     * 规则组ID，仅支持单个输入。
     * @example `1011`
     */
    "PolicyId"?: number;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf_cdnsdf3****`
     */
    "InstanceId": string;
    /**
     * 地域ID。取值：
     * - **cn**：中国大陆地区（默认）
     * - **cn-hongkong**：海外地区
     * @example `cn`
     */
    "Region"?: string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-aek2**`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
