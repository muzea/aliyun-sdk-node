export interface SaveQuickQueryRequest {
    /**
     * 当前的查询分析语句。
     * @example `* and dst_ip : "121.43.234.***"`
     */
    "Query": string;
    /**
     * 快速查询分析名称。
     * @example `no_1_created_search_used_for_dispaly_ip`
     */
    "DisplayName": string;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
