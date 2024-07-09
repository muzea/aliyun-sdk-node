export interface DescribeVirtualWareHouseResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 计算组ID。
         * @example `vw-bp1w2728d535t****`
         */
        VirtualWareHouseId: string;
        /**
         * 计算组描述。
         * @example `test`
         */
        VirtualWareHouseDescription: string;
        /**
         * 计算组的状态，取值说明：
         * - **Creating**：创建中。
         * - **Running**：运行中。
         * - **CreatingPublicSLB**：创建公网链接中。
         * - **DeletingPublicSLB**：释放公网链接中。
         * - **ResourceChanging**：资源变配中。
         * - **ResourceChangingInReadonly**：资源变配中（计算组写入锁定）。
         * - **Deleting**：删除中。
         * @example `Running`
         */
        VirtualWareHouseStatus: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1tg609m5j85jejq****`
         */
        VswitchId: string;
        /**
         * 计算组规格码。
         * @example `n1.xlarge`
         */
        VirtualWareHouseClass: string;
        /**
         * 计算组的缓存空间，单位：GB。
         * @example `200`
         */
        VirtualWareHouseCacheStorage: number;
        /**
         * 计算组的端口号。
         * @example `tcp:9000,http:8123,mysql:9004`
         */
        Ports: string;
    };
    /**
     * 请求ID。
     * @example `F543E6CC-6868-523D-8D28-0E92CF977ED2`
     */
    RequestId: string;
}
