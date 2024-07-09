export interface ListOrderConsumeStatisticRecordsResponse {
    /**
     * 请求 ID
     * @example `1655384783875`
     */
    RequestId: string;
    /**
     * 总页数
     * @example `10`
     */
    TotalPages: number;
    /**
     * 总记录数
     * @example `100`
     */
    TotalElements: number;
    /**
     * 每页记录数
     * @example `10`
     */
    PageSize: number;
    /**
     * 数据项列表
     */
    Items: {
        /**
         * 阿里云订单编号
         * @example `23567876823`
         */
        AliOrderCode: string;
        /**
         * 统计日期，时间戳，精确到秒
         * @example `1655388050`
         */
        StatisticTime: number;
        /**
         * 应用外部标志
         * @example `sms_auth`
         */
        ApplicationExternalId: string;
        /**
         * 服务码
         * @example `SMS`
         */
        ServiceCode: string;
        /**
         * 单价
         * @example `10`
         */
        UnitPrice: number;
        /**
         * 计费数目
         * @example `1`
         */
        ChargedCount: number;
        /**
         * 总价
         * @example `10`
         */
        TotalPrice: number;
    }[];
}
