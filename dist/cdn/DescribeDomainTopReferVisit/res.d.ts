export interface DescribeDomainTopReferVisitResponse {
    /**
     * 查询指定日期。
     * @example `2019-12-21T12:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `95994621-8382-464B-8762-C708E73568D1`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    TopReferList: {
        /**
         * 全部热门页面列表。
         */
        ReferList: {
            /**
             * 流量。单位：byte。
             * @example `200`
             */
            Flow: string;
            /**
             * 流量占比。
             * @example `0.5`
             */
            FlowProportion: number;
            /**
             * 访问次数。
             * @example `3`
             */
            VisitData: string;
            /**
             * 完整的热门页面地址。
             * @example `learn.aliyundoc.com`
             */
            ReferDetail: string;
            /**
             * 访问占比。
             * @example `0.5`
             */
            VisitProportion: number;
        }[];
    };
}
