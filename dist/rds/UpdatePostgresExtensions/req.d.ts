export interface UpdatePostgresExtensionsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-gc7f1****`
     */
    "DBInstanceId": string;
    /**
     * 插件名称，多个插件间使用英文逗号（,）分隔。
     * @example `citext`
     */
    "Extensions": string;
    /**
     * 实例数据库名。可调用DescribeDatabases获取。
     * @example `test_db`
     */
    "DBNames": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
