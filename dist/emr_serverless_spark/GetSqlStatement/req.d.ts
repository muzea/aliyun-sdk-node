export interface GetSqlStatementRequest {
    /**
     * 工作空间ID。
     * @example `w-d2d82aa09155****`
     */
    "workspaceId"?: string;
    /**
     * 交互式查询ID。
     * @example `st-2dadfhajk11cv****`
     */
    "statementId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
