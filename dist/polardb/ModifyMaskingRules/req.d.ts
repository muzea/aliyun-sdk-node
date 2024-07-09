export interface ModifyMaskingRulesRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-*****************`
     */
    "DBClusterId": string;
    /**
     * 脱敏规则名称。一次仅支持输入一个规则名称。
     * > * 您可以通过接口[DescribeMaskingRules](~~212573~~)查看目标集群下的所有脱敏规则详情，包括规则名称。
     * > * 若输入的规则名称不存在于当前集群中，系统会自动根据该名称和`RuleConfig`值创建一个新的脱敏规则。
     * @example `testrule`
     */
    "RuleName"?: string;
    /**
     * 需要修改的脱敏规则的配置参数及其值的JSON串，参数的值都是字符串类型，例如：`{"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}`。其中：
     * * `"auto"`：必填，表示支持动态脱敏算法。
     * * `"databases"`：选填。需要应用当前规则的数据库名称，支持输入多个数据库名称，多个名称间用英文逗号（,）分隔。若该参数留空，表示该规则将应用到当前集群中的所有数据库。
     * * `"tables"`：选填。需要应用当前规则的表名称，支持输入多个表库名称，多个名称间用英文逗号（,）分隔。若该参数留空，表示该规则将应用到当前集群中的所有表。
     * * `"columns"`：必填。需要应用当前规则的字段名称，支持输入多个字段名称，多个名称间用英文逗号（,）分隔。
     * * `"description"`：选填。脱敏规则的描述，选填。字符长度不能超过64个字符。
     * * `"enabled"`：必填。启用或禁用目标脱敏规则。取值为**true**（启用）或**false**（禁用）。
     * * `"applies_to"`：需要应用当前规则的数据库账号名称，支持输入多个数据库账号名，多个账号间用英文逗号（,）分隔。
     * * `"exempted"`：不需要应用当前规则的数据库账号名称，支持输入多个数据库账号名，多个账号间用英文逗号（,）分隔。
     * > * 若输入了`RuleName`参数，`RuleConfig`参数必传。
     * > * `"applies_to"`和`"exempted"`，需要选择其中的一个进行输入。
     * @example `{"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}`
     */
    "RuleConfig"?: string;
    /**
     * 脱敏规则名称列表。支持一次输入一个或多个规则名称，多个名称间用英文逗号（,）分隔。
     * > `RuleName`和`RuleNameList`参数，需要选择其中的一个进行输入。
     * @example `testrule`
     */
    "RuleNameList"?: string;
    /**
     * 启用或禁用目标脱敏规则。取值范围如下：
     * * **true**：启用。
     * * **false**：禁用。
     * > 仅当`RuleNameList`有参数值输入时，该参数生效。
     * @example `true`
     */
    "Enable"?: string;
    /**
     * 脱敏规则版本。取值范围如下：
     * - v1（默认）
     * - v2
     * @example `v2`
     */
    "RuleVersion"?: string;
}
