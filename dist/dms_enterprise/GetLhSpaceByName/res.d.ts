export interface GetLhSpaceByNameResponse {
    /**
     * 请求ID。
     * @example `FE8CA4A8-AB2D-55B7-BD30-01A4609F40D8`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 数仓开发项目空间。
     */
    LakehouseSpace: {
        /**
         * 项目空间ID。
         * @example `1`
         */
        Id: number;
        /**
         * 项目空间名称。
         * @example `test_space`
         */
        SpaceName: string;
        /**
         * 项目空间创建者的用户ID。
         * @example `51***`
         */
        CreatorId: string;
        /**
         * 项目空间所在的租户ID。
         * @example `3***`
         */
        TenantId: string;
        /**
         * 项目空间的描述。
         * @example `test`
         */
        Description: string;
        /**
         * 项目空间模式，返回值如下：
         * - **0**：简单模式
         * - **1**：标准模式
         * @example `1`
         */
        Mode: number;
        /**
         * 数据库类型，当前仅支持：
         * - **14**：AnalyticDB MySQL版
         * - **18**：AnalyticDB PostgreSQL版
         * @example `14`
         */
        DwDbType: string;
        /**
         * 项目空间配置，支持的配置项：
         * - **skipManualRunCheck**：试运行免安全规则检查。
         * - **skipPublishApprove**：发布、运维免审批。
         * @example `{\"skipManualRunCheck\":true,\"skipPublishApprove\":true}`
         */
        SpaceConfig: string;
        /**
         * 开发库的数据库ID。
         * @example `2435****`
         */
        DevDbId: number;
        /**
         * 生产库的数据库ID。
         * @example `2442****`
         */
        ProdDbId: number;
        /**
         * 是否已删除。返回值如下：
         * - **true**：项目空间已删除
         * - **false**：项目空间没有被删除
         * @example `false`
         */
        IsDeleted: boolean;
    };
}
