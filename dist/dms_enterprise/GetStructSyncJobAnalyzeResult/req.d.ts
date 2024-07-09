export interface GetStructSyncJobAnalyzeResultRequest {
    /**
     * 工单号
     * @example `1342355`
     */
    "OrderId": number;
    /**
     * 比较类型，取值：
     * - **CREATE_TABLE**：创建表
     * - **ALTER_TABLE**：修改表
     * - **EQUAL_TABLE**：相同的表
     * - **PASS_TABLE**：跳过的表
     * - **NOT_COMPARE**：待分析的表
     * @example `CREATE_TABLE`
     */
    "CompareType"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `1`
     */
    "Tid"?: number;
}
