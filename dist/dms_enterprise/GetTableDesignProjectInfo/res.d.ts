export interface GetTableDesignProjectInfoResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `48778434-5796-571A-8455-A59146588401`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 结构设计项目信息。
     */
    ProjectInfo: {
        /**
         * 工单ID。
         * @example `95****`
         */
        OrderId: number;
        /**
         * 项目ID。
         * @example `12****`
         */
        ProjectId: number;
        /**
         * 工单的创建时间。
         * @example `2024-04-23 02:57:01`
         */
        GmtCreate: string;
        /**
         * 最后一次修改工单的时间。
         * @example `2024-04-23 02:57:01`
         */
        GmtModified: string;
        /**
         * 结构设计项目的状态：
         * - **DESIGN**：设计中。
         * - **PUBLISHED**：已发布。
         * - **CLOSE**：已关闭。
         * @example `DESIGN`
         */
        Status: string;
        /**
         * 结构设计项目名称。
         * @example `用户增长战役`
         */
        Title: string;
        /**
         * 结构设计项目描述。
         * @example `测试`
         */
        Description: string;
        /**
         * 工单创建者的用户ID。
         * @example `71****`
         */
        CreatorId: number;
        /**
         * 结构设计中变更基准库的信息。
         */
        BaseDatabase: {
            /**
             * 搜索数据库的名称。
             * @example `schema_name@127.0.XX.XX`
             */
            SearchName: string;
            /**
             * 数据库名称。
             * @example `bk_atc020`
             */
            SchemaName: string;
            /**
             * 数据库ID。
             * @example `11****`
             */
            DbId: number;
            /**
             * 是否为逻辑库，取值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            Logic: boolean;
            /**
             * 实例别名。
             * @example `核心交易库`
             */
            Alias: string;
            /**
             * 环境类型，取值如下：
             * - **product**：生产环境。
             * - **dev**：开发环境。
             * - **pre**：预发环境。
             * - **test**：测试环境。
             * - **sit**：SIT环境。
             * - **uat**：UAT环境。
             * - **pet**：压测环境。
             * - **stag**：STAG环境。
             * @example `dev`
             */
            EnvType: string;
            /**
             * 数据库类型，返回值请参见[DbType参数说明](~~198106~~)。
             * @example `POLARDB`
             */
            DbType: string;
        };
    };
}
