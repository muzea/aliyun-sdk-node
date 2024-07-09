export interface CreateQualityRuleRequest {
    /**
     * 规则的强弱：0表示弱规则，1表示强规则。
     * @example `0`
     */
    "BlockType": number;
    /**
     * 分区表达式的ID。
     * @example `15224`
     */
    "EntityId": number;
    /**
     * 规则的描述信息。
     * @example `验证`
     */
    "Comment"?: string;
    /**
     * 校验器的ID。
     * @example `9`
     */
    "Checker"?: number;
    /**
     * 期望值。
     * @example `0`
     */
    "ExpectValue"?: string;
    /**
     * 校验结果的趋势。取值如下：
     * - up，表示上升趋势。
     * - down，表示下降趋势。
     * - abs，表示绝对值。
     * @example `abs`
     */
    "Trend"?: string;
    /**
     * 采样方。如果是自定义SQL，该参数的值为user_defined。
     * @example `count/table_count`
     */
    "MethodName"?: string;
    /**
     * 比较符。包括>、>=、=、≠、<和<=等。
     * > 当Checker=9时，Operator为必选参数。
     * @example `>`
     */
    "Operator"?: string;
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 规则的字段。如果是表级别校验，行数为table_count、大小为table_size字段。
     * @example `table_id`
     */
    "Property"?: string;
    /**
     * 字段的类型，表级table，字段级填写bigint等。
     * @example `bigint`
     */
    "PropertyType"?: string;
    /**
     * 规则的类型：0表示系统定义、1表示用户自定义、2表示项目级规则。
     * @example `0`
     */
    "RuleType": number;
    /**
     * 过滤条件或自定义SQL。
     * @example `table_id>1`
     */
    "WhereCondition"?: string;
    /**
     * 红色告警阈值。表示与样本预期的偏离程度。您可以根据业务需求自定义该阈值。使用强规则并触发红色阈值，会阻塞调度任务。
     * @example `20`
     */
    "CriticalThreshold"?: string;
    /**
     * 橙色告警阈值。表示与样本预期的偏离程度，您可以根据业务需求自定义该阈值。
     * @example `10`
     */
    "WarningThreshold"?: string;
    /**
     * 模板的ID。
     * @example `7`
     */
    "TemplateId"?: number;
    /**
     * 规则的名称。
     * @example `1234`
     */
    "RuleName": string;
    /**
     * 是否为动态阈值：0表示非动态阈值、2表示动态阈值规则。
     * @example `0`
     */
    "PredictType": number;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 在自定义规则之前插入的变量设置，格式如：x=a,y=b。
     * @example `x=a,y=b`
     */
    "TaskSetting"?: string;
}
