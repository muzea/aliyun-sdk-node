export interface StartExecutionRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符。
     * @example `vmeixme`
     */
    "TemplateName"?: string;
    /**
     * 版本号，如不填默认为最新的版本号。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 执行模式。取值：
     * - Automatic（默认值）：自动执行
     * - FailurePause：失败暂停
     * - Debug：单步执行
     * @example `Automatic`
     */
    "Mode"?: string;
    /**
     * 循环模式。取值：
     * - Automatic（默认值）：不暂停
     * - FirstBatchPause：第一批暂停
     * - EveryBatchPause：每批暂停
     * @example `Automatic`
     */
    "LoopMode"?: string;
    /**
     * 父执行ID
     * @example `exec-xxx`
     */
    "ParentExecutionId"?: string;
    /**
     * 安全检查模式。取值：
     * - Skip：此选项表示客户了解风险，无需确认即可执行任何Action，无论什么风险等级。`Mode=Automatic`时有效。
     * - ConfirmEveryHighRiskAction（默认值）：此选项会要求客户确认每一个高风险的Action。客户通过调用**NotifyExecution**接口进行确认或取消。
     * @example `Skip`
     */
    "SafetyCheck"?: string;
    /**
     * 由参数集合组成的Json字符串，默认为{}。
     * @example `{"Status":"Running"}`
     */
    "Parameters"?: string;
    /**
     * 访问令牌
     * @example `123e56767-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 要给执行打的标签
     * @example `{
          "k1": "v1",
          "k2": "v2"
    }`
     */
    "Tags"?: any;
    /**
     * 要给执行添加的描述信息
     * @example `test execution.`
     */
    "Description"?: string;
    /**
     * 模板内容，JSON或YAML格式（同CreateTemplate API 请求参数中的Content字段）。用户传入此字段可直接执行TemplateContent中的任务，而无需提前创建模板再创建执行任务（当用户选择已有的Template创建执行任务时不需传入此字段）。
     * @example `{   "Description": "Example template, describe instances in some status",   "FormatVersion": "OOS-2019-06-01",   "Parameters": {},   "Tasks": [     {       "Name": "describeInstances",       "Action": "ACS::ExecuteAPI",       "Description": "desc-en",       "Properties": {         "Service": "ECS",         "API": "DescribeInstances",         "Parameters": {           "Status": "Running"         }       }     }   ] }`
     */
    "TemplateContent"?: string;
    /**
     * 资源组ID
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * 阿里云对象存储OSS中存放OOS模板内容的URL(只支持公共读的URL)。用户传入此字段可直接根据行TemplateURL中存储的模板内容创建执行任务，无需提前创建模板再创建执行任务（当用户选择已有的Template创建执行任务时不需传入此字段）。
     * @example `http://oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-test-template.json`
     */
    "TemplateURL"?: string;
}
