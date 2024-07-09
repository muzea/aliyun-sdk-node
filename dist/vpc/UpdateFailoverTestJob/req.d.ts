export interface UpdateFailoverTestJobRequest {
    /**
     * 故障演练任务所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000
    `
     */
    "ClientToken"?: string;
    /**
     * 故障演练任务的名称。
     * 长度为0～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 故障演练任务的描述信息。
     * 长度为0～256个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 故障演练资源ID列表。最多可以添加16个资源。
     */
    "ResourceId"?: string[];
    /**
     * 故障演练任务时长。单位为分钟，取值范围为：**1~4320**。
     * @example `60`
     */
    "JobDuration"?: number;
    /**
     * 故障演练任务ID。
     * @example `ftj-bp1yh6mvi13aq3g8w****`
     */
    "JobId": string;
}
