export interface UpdateQualityRuleRequest {
    /**
     * 校验规则的强弱。强弱表示规则的重要程度。取值如下：
     * - 1，表示强规则。
     * - 0，表示弱规则。
     * 您可以根据实际需求设置重要的规则为强规则。如果使用强规则并触发了红色告警，则会阻塞调度任务。
     * @example `0`
     */
    "BlockType"?: number;
    /**
     * 分区表达式的ID。您可以调用[ListQualityRules](~~173995~~)接口获分区表达式ID。
     * @example `123`
     */
    "EntityId"?: number;
    /**
     * 校验规则的描述信息。
     * @example `校验表行数`
     */
    "Comment"?: string;
    /**
     * 校验器ID。您可以调用[ListQualityRules](~~173995~~)接口获取校验器ID。
     * @example `9`
     */
    "Checker": number;
    /**
     * 校验结果的期望值。
     * @example `300`
     */
    "ExpectValue"?: string;
    /**
     * 校验规则的ID。您可以调用[ListQualityRules](~~173995~~)接口获取规则ID。
     * @example `1234`
     */
    "Id": number;
    /**
     * 校验结果的趋势。取值如下：
     * - up，表示上升趋势。
     * - down，表示下降趋势。
     * - abs，表示绝对值。
     * @example `up`
     */
    "Trend"?: string;
    /**
     * 采集样本数据方法的名称。包括avg、count、sum、min、max、count_distinct、user_defined、table_count、table_size、table_dt_load_count、table_dt_refuseload_count、null_value、null_value/table_count、(table_count-count_distinct)/table_count、table_count-count_distinct等。
     * @example `table_count`
     */
    "MethodName": string;
    /**
     * 比较符。包括>、>=、=、≠、<和<=等。
     * @example `>`
     */
    "Operator"?: string;
    /**
     * 引擎或者数据源的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面获取名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 字段的名称。
     * @example `id`
     */
    "Property": string;
    /**
     * 字段的类型。
     * @example `bigint`
     */
    "PropertyType"?: string;
    /**
     * 规则的类型：
     * - 0表示系统创建。
     * - 1表示用户创建。
     * - 2表示项目级规则。
     * @example `0`
     */
    "RuleType"?: number;
    /**
     * 校验任务使用的过滤条件或自定义SQL语句。
     * @example `dt=$[yyyymmdd]`
     */
    "WhereCondition"?: string;
    /**
     * 红色告警阈值。表示与样本预期的偏离程度。您可以根据业务需求自定义该阈值。使用强规则并触发红色阈值，会阻塞调度任务。
     * @example `10`
     */
    "CriticalThreshold"?: string;
    /**
     * 橙色告警阈值。表示与样本预期的偏离程度，您可以根据业务需求自定义该阈值。
     * @example `5`
     */
    "WarningThreshold"?: string;
    /**
     * 使用的校验模板的ID。您可以调用[ListQualityRules](~~173995~~)接口获取校验模板的ID。
     * @example `7`
     */
    "TemplateId"?: number;
    /**
     * 校验规则的名称。
     * @example `123`
     */
    "RuleName"?: string;
    /**
     * 是否为动态阈值。取值如下：
     * - 0，表示非动态阈值。
     * - 2，表示动态阈值。
     * @example `0`
     */
    "PredictType"?: number;
    /**
     * 规则的启用或停用状态，用于控制质量规则是否在生产环境中运行。
     * - true：在数据质量规则关联产出表数据的调度任务执行时，便会触发质量规则校验。
     * - false：在数据质量规则关联产出表数据的调度任务执行时，不会触发质量规则校验。
     * @example `true`
     */
    "OpenSwitch"?: boolean;
    /**
     * DataWorks项目空间ID。
     * @example `26`
     */
    "ProjectId": number;
    /**
     * 在自定义规则之前插入的变量设置，格式如：x=a,y=b
     * @example `x=a,y=b`
     */
    "TaskSetting"?: string;
}
