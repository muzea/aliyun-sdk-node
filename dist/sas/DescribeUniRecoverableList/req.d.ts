export interface DescribeUniRecoverableListRequest {
    /**
     * 数据库防勒索备份策略的ID。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数。
     * @example `123`
     */
    "PolicyId": number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 数据库名称。
     * @example `msdb`
     */
    "Database"?: string;
}
