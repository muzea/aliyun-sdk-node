export interface DescribeZonesResponse {
    /**
     * 本次请求的ID。
     * @example `9324B68F-9863-5722-A0FD-0798E2B02A0E`
     */
    RequestId: string;
    Zones: {
        /**
         * 当前地域支持的可用区列表
         * @example `{'Zone': [{'ZoneId': 'cn-hangzhou-i'}]}`
         */
        Zone: {
            /**
             * 可用区ID
             * @example `cn-hangzhou-MAZ2(j,g)`
             */
            ZoneId: string;
            /**
             * 本地名称
             * @example `华东1（杭州）多可用区 2(j,g)`
             */
            LocalName: string;
        }[];
    };
}
