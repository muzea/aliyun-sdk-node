export interface ListDiagnosticsRequest {
    /**
     * 诊断的关键字。
     * @example `2829A772-B154-5A0A-B61B-DEE8A9EE8A5D`
     */
    "DiagnosticKey"?: string;
    /**
     * 诊断产品。
     * @example `ros`
     */
    "DiagnosticProduct"?: string;
    /**
     * 诊断状态。
     * @example `Complete`
     */
    "Status"?: string;
    /**
     * 下一页查询开始的token。
     * @example `caeba0bbb2be03f84eb48b699f01****`
     */
    "NextToken"?: string;
    /**
     * 使用NextToken方式查询时，每次最多返回的结果数。
     * 取值范围：1~100。
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: string;
}
