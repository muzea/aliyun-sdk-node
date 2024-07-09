export interface ListIoTCloudConnectorsResponse {
    /**
     * 总列表条目数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 云连接器实例列表。
     */
    IoTCloudConnectors: {
        /**
         * 云连接器实例ID。
         * @example `iotcc-bp1odcab8tmno0hdq****`
         */
        IoTCloudConnectorId: string;
        /**
         * 云连接器实例的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：创建完成。
         * - **Deleting**：删除中。
         * - **Updating**：修改中。
         * @example `Created`
         */
        IoTCloudConnectorStatus: string;
        /**
         * 云连接器实例的运营商。取值：
         * - **telecom**：中国电信。
         * - **mobile**：中国移动。
         * - **unicom**：中国联通。
         * @example `mobile`
         */
        ISP: string;
        /**
         * 云连接器实例的运行状态。取值：
         * - **Normal**：正常。
         * - **Abnormal**：不正常。
         * @example `Normal`
         */
        IoTCloudConnectorBusinessStatus: string;
        /**
         * 运营商APN的ID。
         * @example `CMWAP`
         */
        APN: string;
        /**
         * 云连接器实例的带宽峰值。单位：**Gbps**，取值范围：**1**~**10**。
         * @example `2`
         */
        RateLimit: number;
        /**
         * 云连接器实例连接的VPC的ID。
         * @example `vpc-bp1aevy8sofi8mh1q****`
         */
        VpcId: string;
        /**
         * 交换机ID。
         */
        VSwitchList: string[];
        /**
         * 云连接器实例的名称。
         * @example `test`
         */
        IoTCloudConnectorName: string;
        /**
         * 云连接器实例描述信息。
         * @example `test`
         */
        IoTCloudConnectorDescription: string;
        /**
         * 是否开启泛域名功能。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        WildcardDomainEnabled: boolean;
        /**
         * 云连接器实例创建时间。
         * 按照ISO8601标准表示，并需要使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2021-10-01T00:00:00Z`
         */
        CreateTime: number;
        /**
         * 云连接器实例信息修改时间。
         * 按照ISO8601标准表示，并需要使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2021-10-01T10:00:00Z`
         */
        ModifyTime: number;
        /**
         * 云连接器实例组ID。
         * @example `iotccg-g00epppbi9di9y****`
         */
        IoTCloudConnectorGroupId: string;
        /**
         * 云连接器的属性值。表示当前属于**passTrough**模式时显示回程路由。
         * @example `PassThrough`
         */
        Mode: string;
        /**
         * 动态或静态IP。
         * @example `192.168.0.1`
         */
        IpFeature: string;
        /**
         * 云连接器实例的版本，不同版本有不同功能限制和计费策略。取值：
         * - **Basic**：基础版。
         * - **Standard**：标准版。
         * <props="china">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)申请。</props>
         * <props="intl">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)申请</props>
         * @example `Standard`
         */
        Type: string;
        /**
         * 服务类型。取值：
         * - **Normal**：普通型。
         * - **CC5G**：云连接器5G实例托管类型。
         * - **CC5GCCIoT**：云连接器5G过户类型。
         * @example `Normal`
         */
        ServiceType: string;
        /**
         * 阿里云授权者UID。
         * @example `253460731706911258`
         */
        GrantAliUid: string;
    }[];
}
