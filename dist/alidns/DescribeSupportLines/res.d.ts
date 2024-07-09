export interface DescribeSupportLinesResponse {
    RecordLines: {
        /**
         * 云解析线路列表。
         */
        RecordLine: {
            /**
             * 父线路Code，暂时不支持返回。
             * @example `unicom`
             */
            FatherCode: string;
            /**
             * 线路展示名称。
             * @example `中国联通_海南`
             */
            LineDisplayName: string;
            /**
             * 线路Code。
             * @example `cn_unicom_hainan`
             */
            LineCode: string;
            /**
             * 子线路名称。
             * @example `海南`
             */
            LineName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `CFDA0830-7D6E-4C13-8632-B57C7EDCF079`
     */
    RequestId: string;
}
