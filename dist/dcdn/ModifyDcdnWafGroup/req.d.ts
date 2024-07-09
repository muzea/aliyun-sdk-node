export interface ModifyDcdnWafGroupRequest {
    /**
     * 自定义WAF规则组ID。
     * @example `30000110`
     */
    "Id": number;
    /**
     * 自定义WAF规则组名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 自定义WAF规则组中规则的增量修改，JSON序列化后的字符串。
     * @example `{"All":false,"Op":"del","List":"900109"}`
     */
    "Rules"?: string;
}
