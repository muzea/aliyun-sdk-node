export interface GetDBListFromAgentRequest {
    /**
     * 备份网关ID，可通过调用[DescribeBackupGatewayList](~~437230~~)接口获取该参数的值。
     * > 此参数为必填项。
     * @example `160***`
     */
    "BackupGatewayId"?: number;
    /**
     * 备份网关地域ID。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion"?: string;
    /**
     * 异步任务ID，调用[CreateGetDBListFromAgentTask](~~437232~~)获取该参数的值。
     * @example `123456`
     */
    "TaskId"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
     */
    "ClientToken"?: string;
}
