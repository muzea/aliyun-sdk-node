export interface ListCardDayUsagesResponse {
    /**
     * 请求ID
     * @example `AA93A076-3D94-51AB-AC70-4C94AF003B03`
     */
    RequestId: string;
    /**
     * 卡流量信息
     */
    Cards: {
        /**
         * 物联网卡的iccid。
         * @example `89091231231219123`
         */
        Iccid: string;
        /**
         * 卡单月流量信息
         */
        UsageDataMonths: {
            /**
             * 月已用流量，单位MB。
             * @example `1030`
             */
            UsageDataMonth: string;
            /**
             * 月份
             * @example `202207`
             */
            Month: string;
            /**
             * 卡天级别流量信息
             */
            CardDayUsages: {
                /**
                 * 日
                 * @example `20220701`
                 */
                Day: string;
                /**
                 * 日已用流量，单位MB。
                 * @example `40`
                 */
                UsageData: string;
            }[];
        }[];
    }[];
}
