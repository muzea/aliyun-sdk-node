export interface DescribeMeasurementDataResponse {
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
                     * 带宽代码。
                     * @example `cn-cmcc-1`
                     */
                    CostCode: string;
                    /**
                     * 带宽名称。
                     * @example `北上广移动`
                     */
                    CostName: string;
                    /**
                     * 带宽消费值，单位：bit/second。
                     * @example `16486`
                     */
                    CostVal: number;
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
            /**
             * 计算资源。
             */
            ResourceFeeData: {
                /**
                 * 内存，单位：GB。
                 * @example `24`
                 */
                Memory: number;
                /**
                 * 存储，单位：GB。
                 * @example `60`
                 */
                Storage: number;
                /**
                 * vcpu个数。
                 * @example `12`
                 */
                Vcpu: number;
            };
            ResourceFeeDataDetails: {
                /**
                 * 算力资源。
                 */
                ResourceFeeDataDetail: {
                    /**
                     * 资源代码。
                     * @example `vCPU`
                     */
                    CostCode: string;
                    /**
                     * 资源名称。
                     * @example `vCPU`
                     */
                    CostName: string;
                    /**
                     * 资源消费值。
                     * - 内存单位：GB。
                     * - cpu单位：核
                     * - 存储单位：GB。
                     * @example `55`
                     */
                    CostVal: number;
                    /**
                     * 资源类型。
                     * @example `vCPU`
                     */
                    ResourceType: string;
                }[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `125B04C7-3D0D-4245-AF96-14E3758E3F06`
     */
    RequestId: string;
}
