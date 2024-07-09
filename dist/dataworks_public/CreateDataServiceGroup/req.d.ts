export interface CreateDataServiceGroupRequest {
    /**
     * 该字段已废弃。租户ID。
     * @example `10002`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * 业务流程绑定的API网关分组ID，您可以进入API网关控制台分组详情页面进行查看。
     * @example `1000abcd`
     */
    "ApiGatewayGroupId": string;
    /**
     * 业务流程的名称。
     * @example `业务流程名称`
     */
    "GroupName": string;
    /**
     * 业务流程的描述。
     * @example `测试业务流程`
     */
    "Description"?: string;
}
