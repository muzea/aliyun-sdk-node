export interface DescribeDataCheckTableDiffDetailsRequest {
    /**
     * 数据校验方式，取值：
     * - **1**：全量校验。
     * - **2**：增量校验。
     * @example `2`
     */
    "CheckType": number;
    /**
     * 存在不一致数据的表所在的数据库的名称。
     * @example `db_dtstest`
     */
    "DbName": string;
    /**
     * 存在不一致数据的表名。
     * @example `test_person`
     */
    "TbName": string;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 迁移或同步任务ID，您可以调用 [DescribeDtsJobs](~~209702~~)接口查询。
     * @example `xd4e4xb419q****`
     */
    "DtsJobId": string;
    "ResourceGroupId"?: string;
}
