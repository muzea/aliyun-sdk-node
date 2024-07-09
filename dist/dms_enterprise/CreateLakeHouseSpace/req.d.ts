export interface CreateLakeHouseSpaceRequest {
    /**
     * 项目空间名称。
     * @example `test_space`
     */
    "SpaceName": string;
    /**
     * 项目空间的描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 项目空间模式，取值如下：
     * - **0**：简单模式，暂不支持。
     * - **1**：标准模式。
     * @example `1`
     */
    "Mode": string;
    /**
     * 数据库类型，当前仅支持：
     * - **14**：AnalyticDB MySQL版
     * - **18**：AnalyticDB PostgreSQL版
     * @example `14`
     */
    "DwDbType": string;
    /**
     * 项目空间配置，支持的配置项：
     * - **skipManualRunCheck**：试运行免安全规则检查。
     * - **skipPublishApprove**：发布、运维免审批。
     * @example `{\"skipManualRunCheck\":true,\"skipPublishApprove\":true}`
     */
    "SpaceConfig": string;
    /**
     * 开发库的数据库ID（DatabaseId），可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `2435****`
     */
    "DevDbId": string;
    /**
     * 生产库的数据库ID（DatabaseId），可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `2442****`
     */
    "ProdDbId"?: string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
