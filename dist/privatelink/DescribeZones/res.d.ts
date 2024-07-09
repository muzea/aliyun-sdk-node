export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区的集合。
         */
        Zone: {
            /**
             * 可用区名称。
             * @example `华东1 可用区B`
             */
            LocalName: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
        }[];
    };
}
