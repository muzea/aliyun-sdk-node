export interface ListWirelessCloudConnectorsResponse {
    /**
     * 请求id。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    /**
     * 5G高速上云实例列表。
     */
    WirelessCloudConnectors: {
        /**
         * 5G高速上云实例id。
         * @example `cc5g-xxxx`
         */
        WirelessCloudConnectorId: string;
        /**
         * 实例状态，取值：
         * - **Creating**: 创建中
         * - **Available**: 有效的稳定状态
         * - **Pending**: 配置中
         * - **Deleting**: 删除中
         * @example `Available`
         */
        Status: string;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 描述。
         * @example `cc5g-test`
         */
        Description: string;
        /**
         * 地域id。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例使用场景。
         * @example `智慧工厂`
         */
        UseCase: string;
        /**
         * 流量包id。
         * @example `dp-xxxx`
         */
        DataPackageId: string;
        /**
         * 流量包档位，取值：
         * - **200**: 200M/卡/月
         * - **1000**: 1G/卡/月
         * - **3000**: 3G/卡/月
         * - **30000**: 30G/卡/月
         * @example `200`
         */
        DataPackageType: string;
        /**
         * 卡数量。
         * @example `20000`
         */
        CardCount: string;
        /**
         * 实例创建时间。
         * @example `2022-3-15 22:20:00`
         */
        CreateTime: string;
        /**
         * 业务类型
         * @example `Business`
         */
        BusinessType: string;
        /**
         * 服务类型，返回：
         * - **CC5G**：普通实例。
         * - **CC5GCCIoT**：过户实例。
         * @example `CC5G`
         */
        ServiceType: string;
        /**
         * 关联的实例组id
         * @example `cc5gg-****`
         */
        WirelessCloudConnectorGroupId: string;
    }[];
    /**
     * 下一页查询所需值。
     * @example `iou001238joojjaere`
     */
    NextToken: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 列表的条目数。
     * @example `2`
     */
    TotalCount: string;
}
