export interface DescribeDcdnUserBillHistoryResponse {
    /**
     * 请求ID。
     * @example `ED61C6C3-8241-4187-AAA7-5157AE175CEC`
     */
    RequestId: string;
    BillHistoryData: {
        /**
         * 历史计费数据。
         */
        BillHistoryDataItem: {
            /**
             * 维度。
             * @example `vas`
             */
            Dimension: string;
            /**
             * 计费模式。
             * @example `month_4th_day_bandwidth`
             */
            BillType: string;
            /**
             * 计费周期起始时间。
             * @example `2018-09-30T17:00:00Z`
             */
            BillTime: string;
            BillingData: {
                /**
                 * 计费数据。
                 */
                BillingDataItem: {
                    /**
                     * 流量，单位为字节。
                     * @example `2456`
                     */
                    Flow: number;
                    /**
                     * 带宽，单位为Bps。
                     * @example `4839`
                     */
                    Bandwidth: number;
                    /**
                     * 个数，单位为个。
                     * @example `205624`
                     */
                    Count: number;
                    /**
                     * 计费大区，取值： **CN**、**OverSeas**、**AP1**、**AP2**、**AP3**、**NA**、**SA** 、**EU**、**MEAA**。
                     * @example `AP1`
                     */
                    CdnRegion: string;
                    /**
                     * 计费类型。取值：**StaticHttp**、**DynamicHttp**、**DynamicHttps**。
                     * @example `DynamicHttp`
                     */
                    ChargeType: string;
                }[];
            };
        }[];
    };
}
