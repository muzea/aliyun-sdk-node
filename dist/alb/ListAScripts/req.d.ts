export interface ListAScriptsRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数。
     * 取值：**1**~**100**。
     * 默认值：**20**，表示用户没有传入数据。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 监听ID列表。
     */
    "ListenerIds"?: string[];
    /**
     * 可编程脚本ID列表。
     */
    "AScriptIds"?: string[];
    /**
     * 可编程脚本名称列表。
     */
    "AScriptNames"?: string[];
}
