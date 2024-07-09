export interface EnableMetricRuleBlackListRequest {
    /**
     * 报警黑名单策略的ID。多个ID之间以半角逗号（,）分隔，且不能超过50个。
     * 关于如何获取报警黑名单策略的ID，请参见[DescribeMetricRuleBlackList](~~457257~~)。
     * > 该参数也支持JSON Array格式，例如：`["a9ad2ac2-3ed9-11ed-b878-0242ac12****","5cb8a9a4-198f-4651-a353-f8b28788****"]`。
     * @example `a9ad2ac2-3ed9-11ed-b878-0242ac12****`
     */
    "Id": string;
    /**
     * 启用或禁用报警黑名单策略。取值：
     * - true：启用。
     * - false（默认值）：禁用。
     * @example `true`
     */
    "IsEnable": boolean;
}
