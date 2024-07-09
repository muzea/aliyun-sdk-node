export interface EditRecognizeRuleRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
    /**
     * 新建敏感数据识别规则的阿里云用户。此处填写用户名称。
     * @example `dsg-uat`
     */
    "AccountName": string;
    /**
     * 敏感字段ID。可调用[QuerySensNodeInfo](~~2747189~~)接口获取全量敏感字段ID，或调用[QueryRecognizeRuleDetail](~~2766023~~)接口查询特定敏感字段ID。
     * @example `1a928de7-3962-4e07-93ac-e1973baa1024`
     */
    "SensitiveId": string;
    /**
     * 自定义的敏感字段名称。输入长度小于128的字符串。
     * @example `姓名`
     */
    "SensitiveName": string;
    /**
     * 分类结点ID。可调用[QuerySensClassification](~~2746850~~)接口获取所有结点ID，选择一个结点新建敏感字段。此处输入所选的结点ID。
     * @example `0ce67949-0810-400f-a24a-cc5ffafe1024`
     */
    "NodeId": string;
    /**
     * 分类结点的父结点信息。可调用[QuerySensClassification](~~2746850~~)接口获取。
     * @example `客户/个人/个人自然信息/个人基本概况信息`
     */
    "NodeParent": string;
    /**
     * 模板ID。调用[QueryDefaultTemplate](~~2743948~~)接口获取当前默认的模板ID。
     * @example `e1970541-6cf5-4d23-b101-d5b66f6e1024`
     */
    "TemplateId": string;
    /**
     * 敏感字段分级。根据模板定义的分级信息，选择其中一级作为新增敏感字段的等级。例如1~10级。
     * @example `1`
     */
    "level": string;
    /**
     * 分级名称。可调用[QueryDefaultTemplate](~~2743948~~)接口，获取所选分级在模板中对应的分级名称。
     * @example `机密`
     */
    "LevelName"?: string;
    /**
     * 敏感字段描述。长度小于128的字符串。
     * @example `这是一个识别姓名的敏感字段`
     */
    "SensitiveDescription"?: string;
    /**
     * 敏感字段的生效状态。取值如下：
     * - 0：草稿。
     * - 1：生效。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 运算类型。取值如下：
     * - 0：或
     * - 1：与
     * @example `0`
     */
    "OperationType": number;
    /**
     * 敏感数据识别规则类型：
     * - 1：正则表达式。
     * - 2：内置规则。
     * - 3：样本库。
     * - 4：自生成模型。
     * @example `1`
     */
    "RecognizeRulesType"?: string;
    /**
     * 敏感数据识别规则内容。可调用[QuerySensNodeInfo](~~2747189~~)接口，参考内置规则同字段的配置。
     * @example `{"contentRule":{"_clazz":"com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.GenderCond"},"_clazz":"com.alipay.dsg.dal.model.RuleContent"}`
     */
    "RecognizeRules"?: string;
    /**
     * 内容识别。可通过调用[QuerySensNodeInfo](~~2747189~~)接口，参考内置规则的同字段配置。
     * @example `{"_clazz":"com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.NationalityCond"}`
     */
    "ContentScan"?: string;
    /**
     * 字段扫描，仅识别赋值的字段。
     * - 取值格式：${项目空间}.${表名}.${字段名}或${项目空间}.${SCHEMA}.${表名}.${字段名}。
     * - 支持*通配符，如default.table.column1*可以匹配default.table.column10等*后面的任意内容。
     * @example `default.qujian.*`
     */
    "ColScan"?: string;
    /**
     * 字段排除，即不识别赋值的字段。
     * - 取值格式：${项目空间}.${表名}.${字段名}或${项目空间}.${SCHEMA}.${表名}.${字段名}。
     * - 支持*通配符，如default.table.column1*可以匹配default.table.column10等*后面的任意内容。
     * @example `default.qujian.*6`
     */
    "ColExclude"?: string;
    /**
     * 内容扫描。取值为您的数据资产中每个字段注释信息的文本，支持模糊匹配。
     * @example `test`
     */
    "CommentScan"?: string;
    /**
     * 命中阈值。若抽样数据中，超过阈值百分比（例如，60%）的数据命中NER模型，则认为命中该敏感字段。取值：0~100之间的整数。
     * @example `50`
     */
    "HitThreshold"?: number;
}
