export interface ModifyInstanceRequest {
    /**
     * 实例id
     * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
     */
    "InstanceId": string;
    /**
     * 实例名字
     * @example `新实例`
     */
    "InstanceName"?: string;
    /**
     * 实例描述
     * @example `这是新的实例`
     */
    "InstanceDescription"?: string;
    /**
     * 最大并发
     * @example `5`
     */
    "MaxConcurrentConversation": number;
    /**
     * 主叫号码列表
     * @example `["95187"]`
     */
    "CallingNumber"?: string[];
}
