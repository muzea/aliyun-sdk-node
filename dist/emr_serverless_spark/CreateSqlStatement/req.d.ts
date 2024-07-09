export interface CreateSqlStatementRequest {
    /**
     * 工作空间ID。
     * @example `w-26ca1703f6d****`
     */
    "workspaceId"?: string;
    /**
     * 创建SQL查询请求体。
     */
    "body"?: {
        /**
         * SQL代码。允许传入一条或多条SQL语句进行执行。
         * @example `SHOW TABLES`
         */
        codeContent: string;
        /**
         * 默认数据库名。
         * @example `default`
         */
        defaultDatabase: string;
        /**
         * limit值，取值范围：1~10000。
         * @example `1000`
         */
        limit: number;
        /**
         * 默认DLF Catalog ID。
         * @example `default_catalog`
         */
        defaultCatalog: string;
        /**
         * SQL Compute ID。需要在EMR Serverless Spark工作空间的Compute模块内创建。
         * @example `sc-dfahdfjafhajd****`
         */
        sqlComputeId: string;
    };
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
