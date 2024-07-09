export interface ListAccessPointsResponse {
    /**
     * 接入点信息。
     */
    AccessPoints: {
        /**
         * 接入点经度。
         * @example `1.35****`
         */
        Longitude: string;
        /**
         * 当前接入点下可用的智能接入网关实例数量。
         * @example `0`
         */
        ActiveSmartAGCount: number;
        /**
         * 当前接入点下离线的智能接入网关实例数量。
         * @example `7`
         */
        InactiveSmartAGCount: number;
        /**
         * 接入点纬度。
         * @example `103.81****`
         */
        Latitude: string;
        /**
         * 接入点ID。
         * @example `401`
         */
        AccessPointId: number;
    }[];
    /**
     * 接入点总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `E26DBAAE-A796-4A48-98B4-B45AFCD1F299`
     */
    RequestId: string;
}
