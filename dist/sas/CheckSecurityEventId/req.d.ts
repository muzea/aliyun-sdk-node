export interface CheckSecurityEventIdRequest {
    /**
     * 要验证的服务器UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `96ad2473-bc60-45ba-ad1c-932e2866****`
     */
    "Uuid": string;
    /**
     * 要验证的告警事件ID。最多支持设置100个告警事件ID。该参数为空，验证结果**Data**默认为**false**（不属于）。
     * > 调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口可以获取该参数。
     * @example `["1234567","98765432"]`
     */
    "SecurityEventIds"?: string[];
}
