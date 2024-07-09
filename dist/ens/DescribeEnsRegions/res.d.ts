export interface DescribeEnsRegionsResponse {
    /**
     * 业务码。调用成功返回0，失败返回错误码。
     * @example `0`
     */
    Code: number;
    EnsRegions: {
        /**
         * 地域信息。
         */
        EnsRegions: {
            /**
             * 地域代码。
             * @example `NorthEastChina`
             */
            Area: string;
            /**
             * 节点英文名称。
             * @example `NorthChina`
             */
            EnName: string;
            /**
             * 节点ID。
             * @example `cn-dalian-unicom`
             */
            EnsRegionId: string;
            /**
             * 节点中文名称。
             * @example `大连联通`
             */
            Name: string;
            /**
             * 所在省份。
             * @example `辽宁省`
             */
            Province: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
