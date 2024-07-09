export interface DescribePreCheckStatusRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `i03e3zty16i****`
     */
    "DtsJobId": string;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页记录数，默认值为**20**。
     * @example `30`
     */
    "PageSize"?: string;
    /**
     * 任务码，传入本参数指定所需查询的DTS任务的子任务类型，取值为：
     * - **01**：预检查。
     * - **02**：库表结构迁移或初始化。
     * - **03**：全量迁移或初始化。
     * - **04**：增量迁移或同步。
     * @example `01`
     */
    "JobCode": string;
    /**
     * 结构定义的类型，取值：
     * - **before**：库表结构迁移或初始化。
     * - **after**：增量数据迁移或同步的DDL操作。
     * @example `before`
     */
    "StructType"?: string;
    /**
     * DTS实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 过滤项，结构迁移中的表、视图、函数。
     * @example `View`
     */
    "StructPhase"?: string;
    /**
     * 过滤项，模糊匹配表名。
     * @example `dewuprop`
     */
    "Name"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
