export interface DescribeDnsGtmAddressPoolAvailableConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `199C3699-9A7B-41A1-BB5A-F1E862D3CB38`
     */
    RequestId: string;
    AttributeInfos: {
        /**
         * 支持的地址归属区域列表。
         */
        AttributeInfo: {
            /**
             * 地址归属区域父节点线路Code。
             * @example `telecom`
             */
            FatherCode: string;
            /**
             * 地址归属区域分组名称。
             * @example `ISP`
             */
            GroupName: string;
            /**
             * 地址归属区域线路Code。
             * @example `cn_telecom_jiangxi`
             */
            LineCode: string;
            /**
             * 地址归属区域线路名称。
             * @example `ChinaTelecom_jiangxi`
             */
            LineName: string;
            /**
             * 地址归属区域分组Code。
             * @example `ISP`
             */
            GroupCode: string;
        }[];
    };
}
