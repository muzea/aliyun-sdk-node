export interface DescribePriceRequest {
    /**
     * 实例规格。
     * @example `ens.sn1.tiny`
     */
    "InstanceType": string;
    /**
     * 节点ID。
     * @example `cn-shanghai-unicom`
     */
    "EnsRegionId": string;
    /**
     * 购买资源的时长。
     * - 如果不指定PeriodUnit，则默认按月购买。目前只支持按Days和Month。
     * - 如果PeriodUnit为Day时，Period仅可以3。
     * - 如果PeriodUnit为Month时，则Period可以为1-9,12。
     * @example `1`
     */
    "Period": number;
    /**
     * 系统盘大小，单位：GB
     * @example `20`
     */
    "SystemDisk.Size": number;
    /**
     * 数量。
     * @example `1`
     */
    "Quantity": number;
    /**
     * 数据盘大小，单位GB。如果此字段不为空，则以此段为准。
     * @example `50`
     */
    "DataDisk.1.Size"?: number;
    /**
     * ENS带宽计费方式。取值：
     * - BandwidthByDay：日峰值带宽。
     * - 95BandwidthByMonth：月95峰值带宽。
     * - PayByBandwidth4thMonth：月第四峰值带宽。
     * - PayByBandwidth：固定规格带宽。
     * @example `95BandwidthByMonth`
     */
    "InternetChargeType": string;
    /**
     * 如果DataDisk.1.Size为空且本字段不为空时的则以本字段为准。
     */
    "DataDisks"?: {
        /**
         * 磁盘类型
         * @example `cloud_efficiency`
         */
        Category: string;
        /**
         * 数据盘大小，单位：GB。
         * @example `50`
         */
        Size: number;
    }[];
    /**
     * 查询云服务器ENS不同计费周期的价格。取值范围：
     * - Month（默认）：按月计费的价格单位。
     * - Day：按天计费的价格单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
}
