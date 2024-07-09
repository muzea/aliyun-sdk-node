export interface DescribeOutlineBindingRequest {
    /**
     * 租户 ID。
     * @example `t2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 租户名称。
     * 长度为 2~20 个字符，支持英文字母、数字和下划线，区分大小写，必须以字母或下划线开头，不可设置为 sys。
     * @example `pay_online`
     */
    "TableName": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DatabaseName": string;
    /**
     * SQLID。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SQLId": string;
    /**
     * - 当值为 True 时，查询 SQLID 在数据库中的限流信息。
     * - 当值为 False 时，查询 SQLID 在数据库中绑定索引或是绑定执行计划信息。
     * @example `false`
     */
    "IsConcurrentLimit"?: boolean;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
}
