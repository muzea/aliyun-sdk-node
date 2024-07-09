export interface QueryCarbonTrackResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B9AA726D-92A2-5F37-8D42-6C0AA3C67C0F`
     */
    RequestId: string;
    /**
     * 数据列表
     */
    Data: {
        /**
         * 主账号ID
         * @example `1665635164411336`
         */
        Uid: string;
        /**
         * RAM子账号ID
         * @example `251538859557084260`
         */
        SubUid: string;
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
         * 根据请求时间统计的碳排放量，单位kgCO₂e
         * @example `1.23`
         */
        QuotaValue: number;
        /**
         * 统计日期，毫秒时间戳
         * @example `1672502400000`
         */
        StatisticsDate: number;
    }[];
}
