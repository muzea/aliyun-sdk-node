export interface CreateDatabaseRequest {
    /**
     * 数据库名称。
     * > <br>不能使用某些预留关键字。例如：test, sys,oceanbase, information_schema, mysql, performance_schema。
     * @example `sms_pre`
     */
    "DatabaseName": string;
    /**
     * 租户 ID。仅支持 OceanBase MySQL 模式。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 数据库编码方式。
     * 目前支持 utf8mb4, utf16, gbk, gb18030, binary。
     * @example `utf8mb4`
     */
    "Encoding": string;
    /**
     * 字符序。目前支持的字符序为：
     * - Encoding 为 utf8mb4 时, Collation 支持 utf8mb4_general_ci,utf8mb4_bin,utf8mb4_unicode_ci。
     * - Encoding 为 utf16 时, Collation 支持 utf16_general_ci,utf16_unicode_ci,utf16_bin。
     * - Encoding 为 gbk 时, Collation 支持 gbk_chinese_ci,gbk_bin。
     * - Encoding 为 gb18030 时, Collation 支持 gb18030_chinese_ci,gb18030_bin。
     * - Encoding 为 binary 时, Collation 支持 binary。
     * @example `utf8mb4_general_ci`
     */
    "Collation"?: string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * > <br>ClientToken 只支持 ASCII 字符，且不能超过 64 个字符。
     * @example `123e4567-****-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 数据库描述信息。
     * @example `this is a test database`
     */
    "Description"?: string;
}
