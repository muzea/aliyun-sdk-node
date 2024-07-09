export interface DescribeFotaPendingDesktopsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 可升级到`TaskUid`对应版本的镜像但尚未升级的云电脑列表。
     */
    FotaPendingDesktops: {
        /**
         * 云电脑ID。
         * @example `ecd-bvdtu3jn97o1r****`
         */
        DesktopId: string;
        /**
         * 云电脑名称。
         * @example `demo-computer`
         */
        DesktopName: string;
        /**
         * 办公网络ID。
         * @example `cn-shanghai+dir-428216****`
         */
        OfficeSiteId: string;
        /**
         * > 此参数不对外开放使用。
         * @example `windows`
         */
        FotaProject: string;
        /**
         * 云电脑当前的镜像版本。
         * @example `0.0.1-D-20220513.143129`
         */
        CurrentAppVersion: string;
        /**
         * 云电脑的状态。
         * @example `2`
         */
        Status: number;
        /**
         * 连接的会话列表。
         */
        Sessions: {
            /**
             * 连接的用户ID。
             * @example `alice`
             */
            EndUserId: string;
        }[];
    }[];
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 信息。
     * @example `成功`
     */
    Message: string;
}
