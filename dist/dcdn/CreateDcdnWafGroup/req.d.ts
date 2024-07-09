export interface CreateDcdnWafGroupRequest {
    /**
     * WAF规则组名称，最大128字符。新建自定义WAF规则组时必填。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 待复制规则组ID。
     * 复制自定义WAF规则组时必填。
     * 您可以通过[DescribeDcdnWafGroups](~~DescribeDcdnWafGroups~~)接口查询对应的规则组ID。无模板传0或不传。
     * @example `0`
     */
    "TemplateId"?: number;
    /**
     * 是否订阅：取值：
     * - **on**：开启
     * - **off**：关闭
     * 复制其他自定义规则组时不传。
     * @example `on`
     */
    "Subscribe"?: string;
}
