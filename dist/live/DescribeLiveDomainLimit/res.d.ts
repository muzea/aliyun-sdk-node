export interface DescribeLiveDomainLimitResponse {
    /**
     * 请求ID。
     * @example `A3136B58-5876-4168-83CA-B562781981A0`
     */
    RequestId: string;
    LiveDomainLimitList: {
        /**
         * 推流数量限制和转码数量限制列表。
         */
        LiveDomainLimit: {
            /**
             * 转码数量限制。单位：个。
             * @example `50`
             */
            LimitTranscodeNum: number;
            /**
             * 域名当前的转码流数量。
             * @example `10`
             */
            CurrentTranscodeNum: number;
            /**
             * 推流数量限制。单位：个。
             * @example `100`
             */
            LimitNum: number;
            /**
             * 中心转推数量限制，单位：个。
             * @example `50`
             */
            LimitTransferNum: number;
            /**
             * 域名当前的原始流数量。
             * @example `10`
             */
            CurrentNum: number;
            /**
             * 域名当前的中心转推流数量。
             * @example `10`
             */
            CurrentTransferNum: number;
            /**
             * 您查询的主播流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
