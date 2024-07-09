export interface DescribeCdnUserBillHistoryResponse {
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
             * @example `flow`
             */
            Dimension: string;
            /**
             * 计费模式。
             * @example `month_4th_day_bandwidth`
             */
            BillType: string;
            /**
             * 计费周期起始时间。
             * @example `2018-09-30T16:00:00Z`
             */
            BillTime: string;
            BillingData: {
                /**
                 * 计费数据。
                 */
                BillingDataItem: {
                    /**
                     * 流量，单位为字节。
                     * @example `24567`
                     */
                    Flow: number;
                    /**
                     * 带宽，单位为Bps。
                     * @example `4041`
                     */
                    Bandwidth: number;
                    /**
                     * 请求个数，单位为个。
                     * @example `203601`
                     */
                    Count: number;
                    /**
                     * 计费大区。取值：
                     * - **CN**：中国内地。
                     * - **OverSeas**：全球（不包含中国内地）。
                     * - **AP1**：亚太1区。
                     * - **AP2**：亚太2区。
                     * - **AP3**：亚太3区。
                     * - **NA**：北美。
                     * - **SA** ：南美。
                     * - **EU**：欧洲。
                     * - **MEAA**：中东、非洲。
                     * @example `AP1`
                     */
                    CdnRegion: string;
                    /**
                     * 计费类型。取值：
                     * - **StaticHttp**：静态HTTP。
                     * - **DynamicHttp**：动态HTTP。
                     * - **DynamicHttps**：动态HTTPS。
                     * @example `DynamicHttp`
                     */
                    ChargeType: string;
                }[];
            };
        }[];
    };
}
