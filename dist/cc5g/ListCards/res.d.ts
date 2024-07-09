export interface ListCardsResponse {
    /**
     * 请求id。
     * @example `88C2F32F-B641-5980-B7A5-6907050ABCD1`
     */
    RequestId: string;
    /**
     * 卡列表。
     */
    Cards: {
        /**
         * 物联网卡的iccid。
         * @example `89091231231219123`
         */
        Iccid: string;
        /**
         * 网络类型，取值：
         * - **4G**
         * - **5G**
         * @example `5G`
         */
        NetType: string;
        /**
         * 运营商APN的id。
         * @example `bjaliyun01s.5gbj.bjiot`
         */
        APN: string;
        /**
         * 5G高速上云实例的运营商。取值：
         * - **Telecom**：中国电信
         * - **Mobile**：中国移动
         * - **Unicom**：中国联通
         * @example `Telecom`
         */
        ISP: string;
        /**
         * 卡的静态IP地址。
         * @example `10.0.0.118`
         */
        IpAddress: string;
        /**
         * 物联网卡的IMSI。
         * @example `8912039123`
         */
        Imsi: string;
        /**
         * 物联网卡的IMEI。
         * @example `7896129300`
         */
        Imei: string;
        /**
         * 卡是否锁定。
         * @example `false`
         */
        Lock: boolean;
        /**
         * 卡的规格，取值：
         * - **CONSUMER\_THREE\_IN\_ONE:** 消费电子级物联网卡\_三合一
         * - **INDUSTRY\_PATCH:** 工业级物联网贴片卡
         * - **CONSUMER\_PATCH:** 消费电子级物联网贴片卡
         * - **INDUSTRY\_GENERAL:** 工业级物联网卡\_普通
         * - **INDUSTRY\_MICRO:** 工业级物联网卡\_Micro
         * - **CONSUMER\_GENERAL:** 消费电子级物联网卡_普通
         * - **CONSUMER\_TWO\_IN\_ONE:** 消费电子级物联网卡\_二合一
         * - **INDUSTRY\_NANO:** 工业级物联网卡\_Nano
         * - **CAR\_PATCH:** 车规级物联网贴片卡
         * @example `CONSUMER_THREE_IN_ONE`
         */
        Spec: string;
        /**
         * 卡的状态，取值：
         * - **Testable**: 可测试
         * - **Activatable**: 可激活
         * - **Activated**: 已激活
         * - **Deactivated**: 已停用
         * - **Failed**: 已失效
         * - **Cleared**: 已清除
         * - **Replaced**: 已更换
         * - **Resuming**: 恢复中
         * - **ShutDown**: 已停机
         * @example `Activated`
         */
        Status: string;
        /**
         * 描述。
         * @example `test`
         */
        Description: string;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 本月已用流量，单位MB。
         * @example `20`
         */
        UsageDataMonth: number;
        /**
         * 订单号。
         * @example `89099123012`
         */
        OrderId: string;
        /**
         * 激活时间。
         * @example `2022-3-15 22:20:00`
         */
        ActivatedTime: string;
        /**
         * 业务状态，取值：
         * - **Creating**: 创建中
         * - **Available**: 稳定状态，有效
         * - **Configuring**: 配置中
         * - **Deleting**: 删除中
         * @example `Available`
         */
        BusinessStatus: string;
        /**
         * 物联网卡的MSISDN。
         * @example `1441204374591`
         */
        Msisdn: string;
        /**
         * 单卡总使用量
         * @example `50`
         */
        UsageDataTotal: string;
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
