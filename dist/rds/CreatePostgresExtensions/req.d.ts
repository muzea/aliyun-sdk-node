export interface CreatePostgresExtensionsRequest {
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
     * 需要安装的插件，多个插件间使用英文逗号（,）分隔。
     * 如果不填写请求参数**SourceDatabase**，该参数必须填写。
     * @example `citext,pg_profile`
     */
    "Extensions"?: string;
    /**
     * 实例数据库名。可调用DescribeDatabases获取。
     * @example `test_db`
     */
    "DBNames": string;
    /**
     * 插件所属的用户，仅支持高权限账号。
     * @example `test_user`
     */
    "AccountName": string;
    /**
     * 需要同步插件至目标数据库的源端数据库。如果不填写请求参数**Extensions**，该参数必须填写。
     * @example `source_db`
     */
    "SourceDatabase"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 过低小版本实例安装某些特定插件存在安全风险，确认风险即可安装。
     * 取值范围：
     * - true
     * - false
     * > 相关风险说明，请参见[RDS PostgreSQL限制创建插件说明](~~2587815~~)。
     * @example `true`
     */
    "RiskConfirmed"?: boolean;
}
