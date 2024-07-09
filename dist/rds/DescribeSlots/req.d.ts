export interface DescribeSlotsRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances查询。
     * @example `pgm-bp102g323jd4****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
