export interface GetCardResponse {
    /**
     * 请求iD
     * @example `0B28B72A-BD16-51F7-AAEE-55247FE02729`
     */
    RequestId: string;
    /**
     * 物联网卡的iccid。
     * @example `111111111`
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
     * @example `zjalyjs01s.5gjs.njiot`
     */
    APN: string;
    /**
     * 5G高速上云实例的运营商。取值：
     * - **telecom**：中国电信。
     * - **mobile**：中国移动。
     * - **unicom**：中国联通。
     * @example `Unicom`
     */
    ISP: string;
    /**
     * 物联网卡的固定IP地址。
     * @example `172.24.2.121`
     */
    IpAddress: string;
    /**
     * 物联网卡的IMSI。
     * @example `12123123`
     */
    Imsi: string;
    /**
     * 设备IMEI。
     * @example `23412313513512`
     */
    Imei: string;
    /**
     * 卡是否锁定。
     * @example `true`
     */
    Lock: string;
    /**
     * 规格
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
     * @example `Deactivated`
     */
    SimStatus: string;
    /**
     * 实例状态，取值：
     * - **Creating**: 创建中
     * - **Available**: 有效的稳定状态
     * - **UnAvailable**: 无效状态
     * - **Pending**: 配置中
     * - **Deleting**: 删除中
     * @example `Available`
     */
    Status: string;
    /**
     * 描述。
     * @example `task-test`
     */
    Description: string;
    /**
     * 名称。
     * @example `test`
     */
    Name: string;
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxxxxx`
     */
    WirelessCloudConnectorId: string;
    /**
     * 云连接id。
     * @example `iotcc-xxxxxxxx`
     */
    CloudConnectorId: string;
    /**
     * 本月已用流量，单位MB。
     * 本字段信息存在一些外部条件等影响，会出现信息同步滞后，建议使用[ListCardUsages](https://help.aliyun.com/document_detail/472077.html?spm=a2c4g.438976.0.0.8bbc1711r5XXDT)查询单卡流量信息。
     * @example `50`
     */
    UsageDataMonth: number;
    /**
     * 订单id。
     * @example `12312341234124`
     */
    OrderId: string;
    /**
     * 激活时间。
     * @example `2022-08-25 17:34:57`
     */
    ActivatedTime: string;
    /**
     * 物联网卡的MSISDN。
     * @example `2312341231235`
     */
    Msisdn: string;
    /**
     * 单卡总使用量，单位MB。
     * @example `1000`
     */
    UsageDataTotal: number;
    /**
     * 达量限速阈值，单位MB。
     * @example `50`
     */
    LimitThreshold: number;
    /**
     * 达量停机阈值，单位MB。
     * @example `4096`
     */
    StopThreshold: number;
    /**
     * 告警阈值，单位MB。
     * @example `1000`
     */
    AlarmThreshold: number;
}
