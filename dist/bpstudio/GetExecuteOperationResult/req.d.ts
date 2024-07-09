export interface GetExecuteOperationResultRequest {
    /**
     * 操作ID
     * @example `op_xxxxxxxxxxxxxxxxxxxxxx`
     */
    "OperationId": string;
    /**
     * 资源组ID，用于资源组相关权限校验
     * @example `testResourceId`
     */
    "ResourceGroupId"?: string;
}
