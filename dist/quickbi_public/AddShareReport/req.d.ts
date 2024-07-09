export interface AddShareReportRequest {
    /**
     * 分享作品的ID。这里的作品包括数据门户，仪表板，电子表格，自助取数。
     * @example `6b407e50-e774-406b-9956-da2425c2****`
     */
    "WorksId": string;
    /**
     * 被分享者的ID，可能是Quick BI的用户ID，也可能是用户组ID。
     * - ShareToType=0（用户）时，ShareTo为用户ID。
     * - ShareToType=1（用户组）时，ShareTo为用户组ID。
     * - ShareToType=2（组织）时，ShareTo为组织ID。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "ShareToId"?: string;
    /**
     * 分享类型。取值范围：
     * - 0：用户
     * - 1：用户组
     * - 2：组织
     * @example `0`
     */
    "ShareToType": number;
    /**
     * 分享的有效期限，格式为毫秒级时间戳 。
     * @example `1608202110838`
     */
    "ExpireDate": number;
    /**
     * 授权类型。取值范围：
     * - 1：仅查看
     * - 3：查看并导出
     * @example `3`
     */
    "AuthPoint": number;
}
