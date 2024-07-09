export interface DescribeDataCheckTableDetailsRequest {
    /**
     * 校验结果对应的状态，取值为：
     * - **-1**（默认值）：所有状态。
     * - **6**：存在不一致数据的表。
     * @example `-1`
     */
    "Status"?: string;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 数据校验方式，取值：
     * - **1**：全量校验。
     * - **2**：增量校验。
     * @example `1`
     */
    "CheckType": number;
    /**
     * 源数据库中校验的表名。
     * @example `student`
     */
    "TableName"?: string;
    /**
     * 迁移或同步任务ID，您可以调用[DescribeDtsJobs](~~209702~~)接口查询。
     * @example `xd4e4xb419q****`
     */
    "DtsJobId": string;
    /**
     * 源数据库中校验对象的Schema名称。
     * @example `dtstest`
     */
    "SchemaName"?: string;
}
