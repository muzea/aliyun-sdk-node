export interface ListSmartAGByAccessPointRequest {
    /**
     * 智能接入网关实例所在的地域ID。
     * 一个地域内包含一个或多个接入点。您可以通过[ListAccessPoints](~~183876~~)查看地域下的接入点信息。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 分页查询时每页的条目数。默认值为**10**。最大值为**50**。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 接入点ID。
     * @example `238`
     */
    "AccessPointId": number;
    /**
     * 分页查询时的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 智能接入网关实例状态。取值：
     * - **Active**：可用。
     * - **Offline**：离线。
     * @example `Active`
     */
    "SmartAGStatus"?: string;
}
