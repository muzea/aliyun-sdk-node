interface CreateProtectionModuleRuleRequest {
    "RegionId"?: string;
    /**
    * 要操作的域名名称。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 要操作的防护功能。取值：
    * - **tamperproof**：新增网站防篡改规则
    * - **antifraud**：新增数据风控规则
    * - **antifraud_js**：新增数据风控JS规则
    * @example `tamperproof`
    */ "Defense": string;
    /**
    * 要添加的规则内容。按照Rule构造成Json后转换成字符串作为入参，根据要添加的规则类型不同，需要传入的参数不同。具体结构说明如下。
    * - 添加网站防篡改规则（**Defense**为**tamperproof**）时，传入以下参数：
    *     - **uri**，String类型，必选，要防护的URI。
    *     - **name**，String类型，必选，自定义规则名称。
    *     - **status**，Integer类型，可选，是否启用规则。取值：
    *         > 新增防篡改规则时无需填写，更改防篡改规则时必须填写。
    *         - **0**：关闭
    *         - **1**：启用
    * - 添加数据风控规则（**Defense**为**antifraud**或**antifraud_js**）时，传入以下参数：
    *     - **uri**，String类型，必选，要防护的URI。
    * @example `{\"name\":\"test\",\"uri\":\"http://xx.aliyun.com/example/\"}`
    */ "Rule": string;
    /**
    * WAF实例ID。
    * > 您可以调用[DescribePayInfo](~~86651~~)接口查看当前WAF实例ID。
    * @example `waf_elasticity-cn-0xldbqtm005`
    */ "InstanceId": string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 地域ID。取值：
    * - **cn**：中国大陆地区（默认）
    * - **cn-hongkong**：海外地区
    * @example `cn`
    */ "Region"?: string;
}
export { CreateProtectionModuleRuleRequest };