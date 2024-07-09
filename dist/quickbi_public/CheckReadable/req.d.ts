export interface CheckReadableRequest {
    /**
     * 作品的ID。这里的资源包括数据门户，仪表板，电子表格，自助取数。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorksId": string;
    /**
     * 待检测的Quick BI用户ID。
     * @example `de4bc5f9429141cc8091cdd1c15b****`
     */
    "UserId": string;
}
