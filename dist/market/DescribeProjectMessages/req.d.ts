export interface DescribeProjectMessagesRequest {
    /**
     * 云市场业务实例ID
     * @example `4****89`
     */
    "InstanceId": string;
    /**
     * 查询页码，每页查询20条。
     * @example `1`
     */
    "PageIndex"?: number;
}
