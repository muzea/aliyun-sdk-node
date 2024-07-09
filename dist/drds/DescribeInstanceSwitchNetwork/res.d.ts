export interface DescribeInstanceSwitchNetworkResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `03E12FE3-1638-483E-A9B6-1A9120SER56T`
     */
    RequestId: string;
    VpcInfos: {
        /**
         * 专有网络VPC详情。
         */
        VpcInfo: {
            /**
             * 专有网络VPC的ID。
             * @example `vpc_id`
             */
            VpcId: string;
            /**
             * 专有网络VPC名称。
             * @example `vpc_name`
             */
            VpcName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            VswitchInfos: {
                /**
                 * 交换机列表。
                 */
                VswitchInfo: {
                    /**
                     * 专有网络VPC的ID。
                     * @example `vpc_id`
                     */
                    VpcId: string;
                    /**
                     * 是否支持实例。
                     * @example `true`
                     */
                    DrdsSupported: boolean;
                    /**
                     * 交换机的ID。
                     * @example `vswitch_id`
                     */
                    VswitchId: string;
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-a`
                     */
                    AzoneId: string;
                    /**
                     * 交换机的名称。
                     * @example `vswitch_name`
                     */
                    VswitchName: string;
                }[];
            };
        }[];
    };
}
