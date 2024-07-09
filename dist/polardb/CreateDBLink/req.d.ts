export interface CreateDBLinkRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * DBLink的源集群ID。
     * > 您可以通过[DescribeDBClusters](~~173433~~)接口查看PolarDB集群列表。
     * @example `pc-a************`
     */
    "DBClusterId": string;
    /**
     * DBLink名称。
     * - 由小写字母、数字、下划线（_）其中一到三种组成，必须包含小写字母。
     * - 以字母开头，字母或数字结尾。
     * - 长度不超过64个字符。
     * @example `dblink_test`
     */
    "DBLinkName": string;
    /**
     * DBLink的目标集群ID。
     * > - 如果目标为ECS自建Oracle数据库，该参数请传入`null`。
     * > - 您可以通过[DescribeDBClusters](~~173433~~)接口查看PolarDB集群列表。
     * @example `pc-b************`
     */
    "TargetDBInstanceName"?: string;
    /**
     * 目标数据库账号。
     * > 您可以通过[DescribeAccounts](~~173549~~)接口查看PolarDB集群的数据库账号。
     * @example `testacc`
     */
    "TargetDBAccount": string;
    /**
     * 目标数据库账号的密码。
     * @example `Test1111`
     */
    "TargetDBPasswd": string;
    /**
     * 目标数据库名称。
     * > 您可以通过[DescribeDatabases](~~173558~~)接口查询PolarDB集群中的数据库信息。
     * @example `testdb2`
     */
    "TargetDBName": string;
    /**
     * 源数据库名称。
     * > 您可以通过[DescribeDatabases](~~173558~~)接口查询PolarDB集群中的数据库信息。
     * @example `testdb1`
     */
    "SourceDBName": string;
    /**
     * ECS自建Oracle数据库的IP地址。
     * @example `192.**.**.46`
     */
    "TargetIp"?: string;
    /**
     * ECS自建Oracle数据库的端口号。
     * @example `1521`
     */
    "TargetPort"?: string;
    /**
     * VPC ID。
     * > 可通过接口[DescribeVpcs](~~35739~~)查看VPC信息详情。
     * @example `vpc-bp1qpo0kug3a20qqe****`
     */
    "VpcId"?: string;
    /**
     * 地域ID。
     * > 可通过接口[DescribeRegions](~~98041~~)查看地域信息详情。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5c******`
     */
    "ClientToken"?: string;
}
