export interface SummaryJobDetailRequest {
    /**
     * 迁移或同步任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId": string;
    /**
     * 迁移阶段，取值：
     * - **02**：结构迁移阶段。
     * - **03**：增量迁移阶段。
     * @example `02`
     */
    "JobCode": string;
    /**
     * 同步链路方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 当数据同步实例的拓扑为双向时，才可以传入**Reverse**以释放反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 迁移或同步实例ID。
     * @example `dtsl3m1213ye7l****`
     */
    "DtsInstanceId"?: string;
    /**
     * 结构定义的类型，取值：
     * - **before**：库表结构迁移或初始化。
     * - **after**：增量数据迁移或同步的DDL操作。
     * @example `before`
     */
    "StructType"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
