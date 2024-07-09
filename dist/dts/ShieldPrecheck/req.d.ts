export interface ShieldPrecheckRequest {
    /**
     * 实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据迁移或同步实例ID，可以通过调用**DescribeMigrationJobs**、DescribeSynchronizationJobs接口查询。
     * @example `dtsi76118o3w92****`
     */
    "DtsInstanceId": string;
    /**
     * 预检查项，取值如下，多个预检查项以英文逗号（,）分隔。
     * - **CHECK_SAME_OBJ**：同名对象存在性检查。
     * - **CHECK_SAME_USER**：不同名账号存在性检查。
     * - **CHECK_SRC**：源库版本检查。
     * - **CHECK_TOPOLOGY**：拓扑版本检查。
     * > 目前DTS支持的拓扑版本，请参见[拓扑介绍](~~124115~~)。
     * - **CHECK_SERVER_ID**：源库server_id检查。
     * @example `CHECK_SAME_OBJ`
     */
    "PrecheckItems": string;
    "ResourceGroupId"?: string;
}
