export interface QueryRecognizeDataByRuleTypeRequest {
    /**
     * 识别规则类型。可调用[QueryRecognizeRulesType](~~2746905~~)接口获取规则的类型。
     * - 1：正则表达式
     * - 2：内置模型
     * - 3：样本库
     * - 4：自生成模型
     * @example `2`
     */
    "RecognizeRulesType": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
}
