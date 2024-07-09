export interface VerifyCenResponse {
    /**
     * 网段冲突校验的结果。
     * @example `Access`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `0AF9D857-AE96-53D6-B317-5DD665EC4EC0`
     */
    RequestId: string;
    /**
     * 推荐使用的IPv4网段，随机推荐三个网段。当`Status`为`Conflict`时，返回该参数。
     */
    CidrBlocks: string[];
    /**
     * 云企业网实例包含的路由信息列表。
     */
    RouteEntries: {
        /**
         * 路由校验结果。
         * @example `Access`
         */
        Status: string;
        /**
         * 路由对应的网络实例ID。
         * @example `vpc-uf62bu0xs5j8md54p****`
         */
        NextHopInstanceId: string;
        /**
         * 路由网段。
         * @example `172.16.XX.XX`
         */
        DestinationCidrBlock: string;
        /**
         * 路由所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
