export interface QueryConversationsRequest {
    /**
     * 实例ID
     * @example `12f407b22cbe4890ac595f09985848d5`
     */
    "InstanceId": string;
    /**
     * 主叫号码
     * @example `02811111111`
     */
    "CallingNumber"?: string;
    /**
     * 开始日期范围左区间
     * @example `1582183381000`
     */
    "BeginTimeLeftRange"?: number;
    /**
     * 开始日期范围右区间
     * @example `1582356181000`
     */
    "BeginTimeRightRange"?: number;
    /**
     * 当前页数
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页条数
     * @example `10`
     */
    "PageSize": number;
}
