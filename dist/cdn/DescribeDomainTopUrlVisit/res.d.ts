export interface DescribeDomainTopUrlVisitResponse {
    /**
     * 查询指定日期。
     * @example `2019-10-03T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `64D28B53-5902-409B-94F6-FD46680144FE`
     */
    RequestId: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    AllUrlList: {
        /**
         * 全部热门URL列表。
         */
        UrlList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 完整的URL地址。
             * @example `http://example.com/nn_live/nn_x64/a0.m3u8`
             */
            UrlDetail: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 访问次数。
             * @example `161673`
             */
            VisitData: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
    Url200List: {
        /**
         * 返回为2xx的URL列表。
         */
        UrlList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 完整的URL地址。
             * @example `http://example.com/nn_live/nn_x64/aWQ9SE5KU0bGxfcGNfbGl2ZQ,,/HNJSMPP360.m3u8`
             */
            UrlDetail: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 访问次数。
             * @example `161673`
             */
            VisitData: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
    Url300List: {
        /**
         * 返回为3xx的URL列表。
         */
        UrlList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 完整的URL地址。
             * @example `http://example.com/nn_live/nn_x64/a0.m3u8`
             */
            UrlDetail: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 次数。
             * @example `161673`
             */
            VisitData: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
    Url400List: {
        /**
         * 返回为4xx的URL列表。
         */
        UrlList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 完整的URL地址。
             * @example `http://example.com/nn_live/nn_x64/aWQ9SE5KU01QUhbGxfcGNfbGl2ZQ,,/HNJSMPP360.m3u8`
             */
            UrlDetail: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 次数。
             * @example `1884`
             */
            VisitData: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
    Url500List: {
        /**
         * 返回为5xx的URL列表。
         */
        UrlList: {
            /**
             * 流量。单位：byte。
             * @example `460486880`
             */
            Flow: string;
            /**
             * 完整的URL地址。
             * @example `http://example.com/nn_live/nn_x64/aWQ9SE5KU0GNfbGl2ZQ,,/HNJSMPP360.m3u8`
             */
            UrlDetail: string;
            /**
             * 流量占比。
             * @example `0.35`
             */
            FlowProportion: number;
            /**
             * 次数。
             * @example `161673`
             */
            VisitData: string;
            /**
             * 访问占比。
             * @example `0.35`
             */
            VisitProportion: number;
        }[];
    };
}
