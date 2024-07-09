export interface DescribeDisabledExpressConnectRouterRouteEntriesRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次 API 调用返回的NextToken值。
     * @example `FFv4fzkNPW8Z+cZ+DBXXQ3Gmf3XlCgpBH43oaTYTAAcGc708Zb+pDyAGVJBo/MKsyrtZfPnX9Ztf02vgdIDyaNe8UuZdf/JJk069qxGKzqSKg=`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据量。取值范围：1～2147483647。默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==`
     */
    "ClientToken"?: string;
}
