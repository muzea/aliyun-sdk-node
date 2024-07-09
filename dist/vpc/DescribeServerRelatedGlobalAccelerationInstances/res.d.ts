export interface DescribeServerRelatedGlobalAccelerationInstancesResponse {
    /**
     * 请求ID。
     * @example `A8252014-D8DE-4D85-AF35-AFEXXXXXXX`
     */
    RequestId: string;
    GlobalAccelerationInstances: {
        /**
         * 全球加速实例信息列表。
         */
        GlobalAccelerationInstance: {
            /**
             * 后端服务IP地址。
             * @example `172.24.52.234`
             */
            ServerIpAddress: string;
            /**
             * 全球加速实例 ID。
             * @example `ga-t4nku6vv9****`
             */
            GlobalAccelerationInstanceId: string;
            /**
             * 全球加速实例公网 IP。
             * @example `12.34.56.78`
             */
            IpAddress: string;
            /**
             * 全球加速实例所属地域ID。
             * @example `ap-southeast-1`
             */
            RegionId: string;
        }[];
    };
}
