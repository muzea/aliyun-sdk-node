export interface GetHistoricalCampaignReportResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E3A847C1-9800-57DF-9172-2CDDC026388D`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 已接通数量。
         * @example `50`
         */
        CallsConnected: number;
        /**
         * 已呼叫次数，包括重呼次数。
         * @example `100`
         */
        CallsDialed: number;
        /**
         * 已呼损数量。
         * @example `5`
         */
        CallsAbandoned: number;
        /**
         * 已废弃，请参考AnswerRate。
         * @example `0.50`
         */
        ConnectedRate: number;
        /**
         * 接通率，单位%。
         * @example `0.50`
         */
        AnswerRate: number;
        /**
         * 已废弃，请参考AbandonRate。
         * @example `0.10`
         */
        AbandonedRate: number;
        /**
         * 呼损率，计算方式为：已呼损数量/总数。
         * @example `0.10`
         */
        AbandonRate: number;
        /**
         * 坐席利用率，计算方式为：（总通话时长+总话后处理时长）/总坐席在线时长，总坐席在线时长表示该活动关联的技能组下的所有坐席的在线时长。
         * @example `0.50`
         */
        OccupancyRate: number;
    };
}
