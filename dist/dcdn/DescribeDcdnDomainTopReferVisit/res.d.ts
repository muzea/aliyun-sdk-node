export interface DescribeDcdnDomainTopReferVisitResponse {
    /**
     * 查询指定日期。
     * @example `2018-10-03T16:00:00Z`
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
         * 全部热门ReferUrl列表。
         */
        ReferList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 访问次数。
             * @example `229567`
             */
            VisitData: string;
            /**
             * 完整的ReferUrl地址。
             * @example `192.XXX.XXX.1`
             */
            ReferDetail: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
}
