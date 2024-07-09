export interface CancelReportShareRequest {
    /**
     * 作品的ID。这里的作品包括数据门户，仪表板，电子表格，自助取数。
     * @example `6b407e50-e774-406b-9956-da2425c2****`
     */
    "ReportId": string;
    /**
     * 被分享者的ID，可能是Quick BI的用户ID，也可能是用户组ID。
     * - ShareToType=0（用户）时，ShareTo为用户ID。
     * - ShareToType=1（用户组）时，ShareTo为用户组ID。
     * - ShareToType=2（组织）时，ShareTo为组织ID。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "ShareToIds": string;
    /**
     * 删除方式。取值范围：
     * - 0：按用户删除
     * - 1：按用户组删除
     * - 2：按组织删除
     * @example `0`
     */
    "ShareToType": number;
}
