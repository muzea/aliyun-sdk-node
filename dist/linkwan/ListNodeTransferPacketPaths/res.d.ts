export interface ListNodeTransferPacketPathsResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 满足过滤条件的数据包总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 满足过滤条件的平行路径列表。
         */
        List: {
            /**
             * 是否是最优路径。
             * @example `false`
             */
            BestPath: boolean;
            /**
             * 收发此数据包的节点的DevEUI。
             * @example `0000000000000001`
             */
            DevEui: string;
            /**
             * 收发数据包所经过的网关的GwEUI。
             * @example `0000000000000000`
             */
            GwEui: string;
            /**
             * 收发此数据包的信噪比。
             * @example `-10.5`
             */
            Lsnr: number;
            /**
             * 收发此数据包的RSSI。
             * @example `-110`
             */
            Rssi: number;
        }[];
    };
}
