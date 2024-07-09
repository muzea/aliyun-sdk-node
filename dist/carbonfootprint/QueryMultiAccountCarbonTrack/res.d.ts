export interface QueryMultiAccountCarbonTrackResponse {
    /**
     * Id of the request
     * @example `49857457-0425-545D-A7A2-9632B43BE2CE`
     */
    RequestId: string;
    /**
     * 数据列表
     */
    Data: {
        /**
         * 在查询时间范围内某月
         * @example `2023-01`
         */
        Month: string;
        /**
         * 主账号ID
         * @example `1665635164411336`
         */
        Uid: string;
        /**
         * 产品code
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 云产品区域
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 碳排放量，单位kgCO₂e
         * @example `0.0650967`
         */
        CarbonActualEmission: string;
    }[];
}
