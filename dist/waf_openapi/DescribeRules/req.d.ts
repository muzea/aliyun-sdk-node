export interface DescribeRulesRequest {
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `42.84.*.*`
     */
    "SourceIp"?: string;
    /**
     * 分页查询时，每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 规则的id，支持模糊查询
     * @example ` 1131*0`
     */
    "RuleIdKey"?: string;
    /**
     * CVE ID
     * @example `CVE-*-*5`
     */
    "CveIdKey"?: string;
    /**
     * 防护类型。取值如下：
     * -  **11**：SQL注入
     * -  **12**：跨站脚本
     * -  **13**：代码执行
     * -  **14**：CRLF
     * -  **15**：本地文件包含
     * -  **16**：远程文件包含
     * -  **17**：webshell
     * -  **19**：跨站请求伪造
     * -  **20**：其他
     * -  **21**：SEMA
     * @example `11`
     */
    "ProtectionType"?: number;
    /**
     * 应用类型。取值如下：
     * -  **0**：通用
     * -  **1**：wordpress
     * -  **2**：dedecms
     * -  **3**：Discuz
     * -  **4**：phpcms
     * -  **5**：ecshop
     * -  **6**：shopex
     * -  **7**：Drupal
     * -  **8**：joomla
     * -  **9**：Metinfo
     * -  **10**：Struts2
     * -  **11**：SpringBoot
     * -  **12**：Jboss
     * -  **13**：weblogic
     * -  **14**：websphere
     * -  **15**：tomcat
     * -  **16**：es
     * -  **17**：ThinkPHP
     * -  **18**：fastjosn
     * -  **19**：ImageMagick
     * -  **20**：PHPWind
     * -  **21**：PHPAdmin
     * -  **99**：其它
     * @example `0`
     */
    "ApplicationType"?: number;
    /**
     * 要查询的检查项风险等级。取值：
     * - **0**：高危
     * - **1**：中危
     * - **2**：低危
     * @example `0`
     */
    "RiskLevel"?: number;
    /**
     * 正则规则组ID
     * @example `1012`
     */
    "RuleGroupId": number;
    /**
     * 设置规则名称的语言属性，取值：
     * - **zh**：表示规则名称为中文。
     * - **en**：表示规则名称为英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstance](~~433756~~)接口查看当前WAF实例ID。
     * @example `waf-cn-*`
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
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-*`
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
