export interface DestroyDBInstanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * > 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCziJZNwH****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用[DescribeDBInstances](~~26232~~)获取。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBInstanceId": string;
}
