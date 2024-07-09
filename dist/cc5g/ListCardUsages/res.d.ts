export interface ListCardUsagesResponse {
    /**
     * 请求ID
     * @example `186B6E37-D9D1-5E64-ACDE-E89F7E68A37B`
     */
    RequestId: string;
    /**
     * 卡信息列表。
     */
    Cards: {
        /**
         * 物联网卡的iccid。
         * @example `89091231231219123`
         */
        Iccid: string;
        /**
         * 本月已用流量，单位MB。
         * @example `20`
         */
        UsageDataMonth: number;
    }[];
    /**
     * 返回总量
     * @example `2`
     */
    TotalCount: string;
}
