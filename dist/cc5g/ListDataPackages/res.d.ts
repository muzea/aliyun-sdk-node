export interface ListDataPackagesResponse {
    /**
     * 请求id。
     * @example `8734B5B2-FC84-54C4-8038-D40228CF01FE`
     */
    RequestId: string;
    /**
     * 流量包列表。
     */
    DataPackages: {
        /**
         * 流量包id。
         * @example `dp-xxxx`
         */
        DataPackageId: string;
        /**
         * 流量包状态，取值：
         * - **Creating**: 创建中
         * - **Available**: 已生效
         * - **Expired**: 已过期
         * @example `Available`
         */
        Status: string;
        /**
         * 流量包名称
         * @example `测试流量包`
         */
        Name: string;
        /**
         * 卡所属运营商：
         * - **Telecom**: 电信
         * - **Mobile**: 移动
         * - **Unicom**: 联通
         * @example `Telecom`
         */
        ISP: string;
        /**
         * 流量包档位，取值：
         * - **200**: 200M/卡/月
         * - **1000**: 1G/卡/月
         * - **3000**: 3G/卡/月
         * - **30000**: 30G/卡/月
         * @example `200`
         */
        Size: string;
        /**
         * 卡数量。
         * @example `20000`
         */
        CardCount: string;
        /**
         * 开通时间。
         * @example `2022-3-15 22:20:00`
         */
        CreateTime: string;
        /**
         * 失效时间。
         * @example `2099-3-15 22:20:00`
         */
        ExpiredTime: string;
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
