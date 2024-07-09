export interface GetDataServiceApiRequest {
    /**
     * 租户ID。
     * @example `10002`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * 数据服务API的ID。
     * @example `10000`
     */
    "ApiId": number;
}
