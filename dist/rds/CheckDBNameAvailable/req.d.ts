export interface CheckDBNameAvailableRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3a****`
     */
    "DBInstanceId": string;
    /**
     * 待检查的数据库名称。
     * @example `test1`
     */
    "DBName": string;
}
