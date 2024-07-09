export interface DeletePostgresExtensionsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp156o9ti493****`
     */
    "DBInstanceId": string;
    /**
     * 插件名，多个插件用英文逗号（,）分隔。
     * @example `citext`
     */
    "Extensions": string;
    /**
     * 插件所在的数据库，多个数据库用英文逗号（,）分隔。
     * @example `test_db`
     */
    "DBNames": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
