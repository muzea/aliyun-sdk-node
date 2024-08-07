export interface DescribeDnatEntriesRequest {
    /**
     * 智能接入网关实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * > 目前仅支持硬件版实例。
     * @example `sag-djgd*************`
     */
    "SagId": string;
    /**
     * DNAT类型，包含以下选项：
     * * **Intranet**：缺省值，表示私网DNAT。
     * * **Internet**：表示公网DNAT。
     * @example `Intranet`
     */
    "Type"?: string;
    /**
     * 分页查询时设置的每页行数，默认值为**10**，最大值为**50**。
     * @example `12`
     */
    "PageSize"?: number;
    /**
     * 实例状态列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
