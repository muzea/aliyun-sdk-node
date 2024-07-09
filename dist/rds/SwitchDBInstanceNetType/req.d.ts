export interface SwitchDBInstanceNetTypeRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1****`
     */
    "DBInstanceId": string;
    /**
     * 自定义连接地址的前辍。由字母，数字组成，小写字母开头，8~64个字符。完整连接地址为：前缀.引擎名.rds.aliyuncs.com。例如test1234.mysql.rds.aliyuncs.com。
     * @example `new****`
     */
    "ConnectionStringPrefix": string;
    /**
     * 端口号，取值：**3001~3999**。
     * @example `3306`
     */
    "Port"?: string;
    /**
     * 连接地址类型，取值：
     * * **Normal**：普通连接
     * * **ReadWriteSplitting**：读写分离连接
     * 默认返回所有连接。
     * @example `Normal`
     */
    "ConnectionStringType"?: string;
}
