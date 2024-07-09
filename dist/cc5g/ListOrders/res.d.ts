export interface ListOrdersResponse {
    /**
     * 请求id。
     * @example `88C2F32F-B641-5980-B7A5-6907050ABCD1
    `
     */
    RequestId: string;
    /**
     * 订单列表。
     */
    Orders: {
        /**
         * 订单id。
         * @example `89************`
         */
        OrderId: string;
        /**
         * 订单状态，取值：
         * - **Pending**: 待发货
         * - **Posting**: 已发货
         * - **Finished**: 已完成
         * @example `Pending`
         */
        Status: string;
        /**
         * 订单类型，取值：
         * - **NewBuy**: 新购
         * - **ScaleOut**: 扩容
         * - **ScaleIn**: 缩容
         * - **BuyCard**: 购卡
         * - **Renewal**: 续期
         * @example `NewBuy`
         */
        Action: string;
        /**
         * 订单描述。
         * @example `order-test`
         */
        Description: string;
        /**
         * 物流单号。
         * @example `SF14*********`
         */
        LogisticsId: string;
        /**
         * 物流状态，取值：
         * - **Transporting**: 运送中
         * - **Delivering**: 派件中
         * - **Delivered**: 已送达
         * - **Signed**: 已签收
         * @example `Signed`
         */
        LogisticsStatus: string;
        /**
         * 物流公司，取值：
         * - **SF**: 顺丰
         * - **ZTO**: 中通
         * @example `SF`
         */
        LogisticsType: string;
        /**
         * 物流最新更新时间。
         * @example `2022-3-15 22:20:00`
         */
        LogisticsUpdateTime: string;
        /**
         * 卡数量。
         * @example `20000`
         */
        CardCount: string;
        /**
         * 邮寄联系人。
         * @example `张三`
         */
        ContactName: string;
        /**
         * 邮寄联系电话。
         * @example `139000*******`
         */
        ContactPhone: string;
        /**
         * 邮寄地址。
         * @example `某公司`
         */
        PostAddress: string;
        /**
         * 订单创建时间。
         * @example `2022-3-15 21:20:00`
         */
        CreateTime: string;
        /**
         * 订单支付时间。
         * @example `2022-3-15 21:30:00`
         */
        PayTime: string;
        /**
         * 地域id。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 卡的规格，取值：
         * - **CONSUMER\_THREE\_IN\_ONE:** 消费电子级物联网卡\_三合一
         * - **INDUSTRY\_PATCH**
         * : 工业级物联网贴片卡
         * - **CONSUMER\_PATCH**
         * :消费电子级物联网贴片卡
         * - **INDUSTRY\_GENERAL**
         * :工业级物联网卡\_普通
         * - **INDUSTRY\_MICRO**
         * :工业级物联网卡\_Micro
         * - **CONSUMER\_GENERAL**
         * :消费电子级物联网卡_普通
         * - **CONSUMER\_TWO\_IN\_ONE**
         * ：消费电子级物联网卡\_二合一
         * - **INDUSTRY\_NANO**
         * ：工业级物联网卡\_Nano
         * - **CAR\_PATCH**
         * :车规级物联网贴片卡
         * @example `CONSUMER_THREE_IN_ONE`
         */
        CardType: string;
        /**
         * 卡的网络类型，取值：
         * - **4G**
         * - **5G**
         * @example `5G`
         */
        CardNetType: string;
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
