export interface GetListenerHealthStatusRequest {
    /**
     * 实例的监听ID。
     * @example `lsn-o4u54y73wq7b******`
     */
    "ListenerId": string;
    /**
     * 是否包含转发规则的检查结果。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `true`
     */
    "IncludeRule"?: boolean;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的最大条目数。取值范围：**1**~**30**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
}
