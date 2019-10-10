interface ModifyAclRuleRequest {
    "RegionId"?: string;
    /**
    * 域名名称。
    * @example `rstest.cdn.com`
    */ "Domain": string;
    /**
    * 精准访问控制规则详细信息，采用JSON格式的字符串表述，具体结构见下表。
    * - **Id**：Long类型，可选，规则ID。
    * - **Name**：String类型，必选，规则名称。
    * - **Action**：Integer类型，必选，规则的匹配动作，取值：
    *     - **0**：表示阻断，即命中该规则的匹配条件，则阻断该访问请求。
    *     - **1**：表示放行，即命中该规则的匹配条件，则放行该访问请求。
    *     - **2**：表示告警，即命中该规则的匹配条件，将放行该访问请求，但会记录该请求并告警。
    * - **ContinueComponent**：String类型，可选，是否继续执行其它WAF防护策略，采用JSON格式的字符串表述，具体结构见下表。
    *     - **post_action_cc**，Integer类型，可选，是否继续执行CC防护规则检测，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    *     - **post_action_waf**，Integer类型，可选，是否继续执行Web攻击防护规则检测，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    *     - **post_action_sa**，Integer类型，可选，是否继续执行智能防护引擎规则检测，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    *     - **post_action_block_geo**，Integer类型，可选，是否继续执行地区封禁，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    *     - **post_action_data_risk_control**，Integer类型，可选，是否继续执行数据风控防护，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    *     - **post_action_sdk**，Integer类型，可选，是否继续执行SDK防护，取值：
    *         - **0**：表示否。
    *         - **1**：表示是。
    * - **Conditions**，Array类型，可选，规则匹配条件，数组中具体定义见下表。
    *     - **Key**，String类型，必选，匹配字段，取值包括IP、URL、Referer、User-Agent、Params、Cookie、Content-Type、X-Forwarded-For、Content-Length、Post-Body、Http-Method、Header。不同版本的WAF实例支持的匹配字段不同，您可以在Web应用防火墙管理控制台中查看您的实例当前所支持的匹配字段。
    *     - **Contain**，Integer类型，必选，逻辑符，取值：
    *         - **0**：表示不包含。
    *         - **1**：表示包含。
    *         - **2**：表示不存在。
    *         - **10**：表示不等于。
    *         - **11**：表示等于。
    *         - **20**：表示长度小于。
    *         - **21**：表示长度等于。
    *         - **22**：表示长度大于。
    *         - **30**：表示值小于。
    *         - **31**：表示值等于。
    *         - **32**：表示值大于。
    *     - **Value**，String类型，必选，匹配内容。
    * @example `xx`
    */ "Rules": string;
    /**
    * WAF实例ID。
    * > 您可以通过调用[DescribePayInfo](~~86651~~)接口查看您当前WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * WAF实例所在的地域。取值：
    * - **cn**：表示中国大陆地区（默认）
    * - **cn-hongkong**：表示海外地区
    * @example `cn`
    */ "Region"?: string;
}
export { ModifyAclRuleRequest };