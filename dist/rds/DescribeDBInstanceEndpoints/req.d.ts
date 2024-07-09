export interface DescribeDBInstanceEndpointsRequest {
    /**
     * 该参数用于保证请求的幂等性，防止重复提交请求。参数值由客户端生成，保证在不同请求间唯一。
     * 该参数值由ASCII字符组成，最长不超过64个字符，不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances查询。
     * @example `rm-u****`
     */
    "DBInstanceId": string;
    /**
     * 实例的Endpoint ID。
     * > 未传该参数表示返回所有Endpoint信息。
     * @example `ep-****-ro`
     */
    "DBInstanceEndpointId"?: string;
}
