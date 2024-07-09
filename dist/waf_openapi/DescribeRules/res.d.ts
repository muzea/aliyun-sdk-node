export interface DescribeRulesResponse {
    /**
     * 正则规则组ID。
     * @example `1012`
     */
    RuleGroupTemplateId: string;
    /**
     * 正则规则组名称。
     * @example `test111`
     */
    RuleGroupName: string;
    /**
     * 本次请求的id。
     * @example `D7861F61-5B61-46CE-A47C-*`
     */
    RequestId: string;
    /**
     * 查询到的规则总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 规则组的名称。
     * @example `rule_group_test`
     */
    RuleGroupTemplateName: string;
    /**
     * 规则组自动更新状态。
     * - 1：表示自动更新。
     * - 2：表示不自动更新。
     * @example `1`
     */
    IsSubscribe: number;
    /**
     * 规则列表。
     */
    Rules: {
        /**
         * 规则风险等级。取值：
         * - **0**：高风险。
         * - **1**：中风险。
         * - **2**：低风险。
         * @example `0`
         */
        RiskLevel: number;
        /**
         * 规则的更新时间。
         * @example `1684120148.0`
         */
        UpdateTime: number;
        /**
         * 规则的描述信息。
         * @example `默认`
         */
        Description: string;
        /**
         * CVE链接。
         * @example `https://avd.aliyun.com/`
         */
        CveUrl: string;
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
         * @example `15`
         */
        ApplicationType: number;
        /**
         * CVE ID。
         * @example `CVE-2021-*`
         */
        CveId: string;
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
        ProtectionType: number;
        /**
         * 规则名称。
         * @example `rules_41`
         */
        RuleName: string;
        /**
         * 规则id。
         * @example `42755`
         */
        RuleId: number;
    }[];
}
