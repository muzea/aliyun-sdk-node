export interface DescribeVirtualWareHouseEndpointInfoResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 计算组的IP地址。
         * @example `10.0.xx.xx`
         */
        Ip: string;
        /**
         * 网络类型，取值说明：
         * - **intranet**：VPC网络。
         * - **internet**：外网。
         * @example `intranet`
         */
        NetType: string;
        /**
         * 网络访问入口的类型。
         * @example `slb`
         */
        EndpointType: string;
        /**
         * 计算组的端口号。
         * @example `tcp:9000,http:8123,mysql:9004`
         */
        Ports: string;
        /**
         * 网络连接地址。
         * @example `vw-bp11gxp8g992f****.clickhouse.ads.aliyuncs.com`
         */
        Url: string;
        /**
         * 网络访问入口的创建状态，取值说明：
         * - **Creating**：创建中。
         * - **Ready**：可使用。
         * - **Deleting**：删除中。
         * @example `Ready`
         */
        Status: string;
    }[];
    /**
     * 请求ID。
     * @example `7EE0EF77-B7BA-5EE3-9B11-F8DE7B65BAB8`
     */
    RequestId: string;
}
