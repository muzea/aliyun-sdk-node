export interface GetCardFlowInfoResponse {
    /**
     * 接口返回码。
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 物联网卡的流量信息。
     */
    Data: {
        /**
         * 网络数据。
         */
        ListVendorDetail: {
            /**
             * 网络延迟，单位ms。
             * @example `20`
             */
            NetWorkDelay: string;
            /**
             * 信号强度。
             * @example `20`
             */
            SignalStrength: string;
            /**
             * 物联网卡的运营商。
             * - CMCC：移动。
             * - CUCC：联通。
             * - CTCC：电信。
             * @example `CMCC`
             */
            Vendor: string;
            /**
             * 已用流量。
             * @example `100MB`
             */
            UsedFlow: string;
            /**
             * 用量占比。
             * @example `80%`
             */
            Ratio: string;
        }[];
        /**
         * 月用量详情。
         */
        ListCardMonthFlow: {
            /**
             * 月总流量统计。
             * @example `200MB`
             */
            FlowCount: string;
            /**
             * 流量月份。
             * @example `202112`
             */
            Month: string;
            /**
             * 每日用量。
             */
            ListDayFlow: {
                /**
                 * 日用量。
                 * @example `100MB`
                 */
                Flow: string;
                /**
                 * 流量日期。
                 * @example `20211201`
                 */
                Day: string;
            }[];
        }[];
        /**
         * 套餐包信息。
         */
        ListPackageDTO: {
            /**
             * 套餐生效时间。
             * @example `2022-03-20 23:59:59`
             */
            EffectiveTime: string;
            /**
             * 备注。
             * @example `备注内容`
             */
            Remark: string;
            /**
             * 套餐名称。
             * @example `移动-单卡通用流量-月包-30M`
             */
            PackageName: string;
            /**
             * 套餐到期时间。
             * @example `2022-04-30 23:59:59`
             */
            ExpireTime: string;
        }[];
    };
}
