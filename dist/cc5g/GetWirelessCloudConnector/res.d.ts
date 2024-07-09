export interface GetWirelessCloudConnectorResponse {
    /**
     * 请求id。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    /**
     * 到用户VPC的连接列表。
     */
    NetLinks: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 网络连接id。
         * @example `cciot-xxxx`
         */
        NetLinkId: string;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 描述。
         * @example `连接test`
         */
        Description: string;
        /**
         * 状态，取值：
         * - **Pending**: 配置中
         * - **Attached**: 已绑定
         * - **Detached**: 已解绑
         * @example `Attached`
         */
        Status: string;
        /**
         * 类型，取值：
         * - **Standard**: 标准版
         * - **Basic**: 基础版
         * @example `Standard`
         */
        Type: string;
        /**
         * 运营商APN的id。
         * @example `bjaliyun01s.5gbj.bjiot`
         */
        APN: string;
        /**
         * 卡所属运营商:
         * - **Telecom**: 电信
         * - **Mobile**: 移动
         * - **Unicom**: 联通
         * @example `Telecom`
         */
        ISP: string;
        /**
         * 专有网络VPC ID。
         * @example `vpc-xxxx`
         */
        VpcId: string;
        /**
         * 绑定的交换机列表。
         */
        VSwitchs: string[];
        /**
         * 连接创建时间。
         * @example `2022-03-15 22:20:00`
         */
        CreateTime: string;
        /**
         * 阿里云授权者UID。
         * @example `11111111111`
         */
        GrantAliUid: string;
    }[];
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
     * 分组ID
     * @example `cc5gg-****`
     */
    WirelessCloudConnectorGroupId: string;
    /**
     * 支持的功能特性列表。
     */
    Features: string[];
    /**
     * 服务类型，返回：
     * - **CC5G**：普通实例。
     * - **CC5GCCIoT**：过户实例。
     * @example `CC5GCCIoT`
     */
    ServiceType: string;
}
