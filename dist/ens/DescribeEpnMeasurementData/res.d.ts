export interface DescribeEpnMeasurementDataResponse {
    MeasurementDatas: {
        /**
         * 计量数据。
         */
        MeasurementData: {
            BandWidthFeeDatas: {
                /**
                 * 带宽数据。
                 */
                BandWidthFeeData: {
                    /**
                     * 计费项代码。
                     * @example `cn-cmcc-1`
                     */
                    CostCode: string;
                    /**
                     * 计费项名称。
                     * @example `北上广移动`
                     */
                    CostName: string;
                    /**
                     * 计费类型
                     * * SpeedUp：智能加速带宽
                     * * IntranetConnection：普通内网带宽
                     * @example `SpeedUp`
                     */
                    CostType: string;
                    /**
                     * 计费项数值。
                     * @example `16486`
                     */
                    CostVal: number;
                    /**
                     * 此参数暂不使用。
                     * @example `此参数暂不使用。`
                     */
                    IspLine: string;
                }[];
            };
            /**
             * 计费类型。
             * - ChargeByUnified：统一计费。
             * - ChargeByGrade：分档计费。
             * @example `ChargeByGrade`
             */
            ChargeModel: string;
            /**
             * 消费周期。
             * @example `2019-07-30`
             */
            CostCycle: string;
            /**
             * 消费结束时间。
             * @example `2019-07-30T16:00:00Z`
             */
            CostEndTime: string;
            /**
             * 消费开始时间。
             * @example `2019-07-29T16:00:00Z`
             */
            CostStartTime: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `A6328C33-6304-5291-8641-0A00A99D0DD0`
     */
    RequestId: string;
}
