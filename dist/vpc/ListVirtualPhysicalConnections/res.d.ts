export interface ListVirtualPhysicalConnectionsResponse {
    /**
     * 请求ID。
     * @example `2A55F69E-EE3D-5CBE-8805-734F7D5B46B9`
     */
    RequestId: string;
    /**
     * 共享专线信息列表。
     */
    VirtualPhysicalConnections: {
        /**
         * 物理专线的类型。默认值为**VPC**。
         * @example `VPC`
         */
        Type: string;
        /**
         * 物理专线的状态。取值：
         * - **Initial**：申请中。
         * - **Approved**：审批通过。
         * - **Allocating**：正在分配资源。
         * - **Allocated**：接入施工中。
         * - **Confirmed**：等待用户确认。
         * - **Enabled**：已开通。
         * - **Rejected**：申请被拒绝。
         * - **Canceled**：已取消。
         * - **Allocation Failed**：资源分配失败。
         * - **Terminated**：已终止。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 物理专线的创建时间。
         * @example `2021-06-08T12:20:55`
         */
        CreationTime: string;
        /**
         * 物理专线接入设备所在的物理位置。
         * @example `余杭经济开发区XXX交叉口, 余杭XX机房, E***包间`
         */
        AdLocation: string;
        /**
         * 物理专线接入设备的端口号。
         * @example `80`
         */
        PortNumber: string;
        /**
         * 共享专线的带宽值。
         * 单位：**M**表示Mbps，**G**表示Gbps。
         * @example `50M`
         */
        Spec: string;
        /**
         * 物理专线的付费方式。
         * 取值：**Prepaid**，表示预付费。
         * @example `Prepaid`
         */
        ChargeType: string;
        /**
         * 物理专线的描述信息。
         * @example `desctest`
         */
        Description: string;
        /**
         * 物理专线的带宽。单位：Mbps。
         * @example `50`
         */
        Bandwidth: number;
        /**
         * 物理专线的开通时间。
         * @example `2021-10-08T10:44Z`
         */
        EnabledTime: string;
        /**
         * 提供接入物理线路的运营商。取值：
         * - **CT**：中国电信。
         * - **CU**：中国联通。
         * - **CM**：中国移动。
         * - **CO**：中国其他。
         * - **Equinix**：Equinix。
         * - **Other**：境外其他。
         * @example `CU`
         */
        LineOperator: string;
        /**
         * 本地数据中心的地理位置。
         * @example `浙江省杭州市XX区XX街道XX号`
         */
        PeerLocation: string;
        /**
         * 冗余物理专线的ID。
         * @example `pc-119mfjzm****`
         */
        RedundantPhysicalConnectionId: string;
        /**
         * 物理专线的名称。
         * @example `nametest`
         */
        Name: string;
        /**
         * 运营商为物理专线提供的电路编码。
         * @example `longtel001`
         */
        CircuitCode: string;
        /**
         * 共享专线的到期时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2021-11-08T16:00:00Z`
         */
        EndTime: string;
        /**
         * 物理专线接入端口类型。取值：
         * - **100Base-T**：百兆电口。
         * - **1000Base-T**：千兆电口。
         * - **1000Base-LX**：千兆单模光口（10千米）。
         * - **10GBase-T**：万兆电口。
         * - **10GBase-LR**：万兆单模光口（10千米）。
         * - **40GBase-LR**：四万兆单模光口。
         * - **100GBase-LR**：十万兆单模光口。
         * @example `10GBase-LR`
         */
        PortType: string;
        /**
         * 物理专线的商业状态。取值：
         * - **Normal**：已开通。
         * - **FinancialLocked**：欠费锁定。
         * - **SecurityLocked**：因安全原因被锁定。
         * @example `Normal`
         */
        BusinessStatus: string;
        /**
         * LOA的状态。取值：
         * - **Applying**：LOA申请中。
         * - **Accept**：LOA申请通过。
         * - **Available**：LOA可用。
         * - **Rejected**：LOA申请驳回。
         * - **Completing**：专线施工中。
         * - **Complete**：专线施工完成。
         * - **Deleted**：LOA已删除。
         * @example `Available`
         */
        LoaStatus: string;
        /**
         * 物理专线的接入点ID。
         * @example `ap-cn-hangzhou-finance-yh-E`
         */
        AccessPointId: string;
        /**
         * 共享专线实例ID。
         * @example `pc-bp1mrgfbtmc9brre7****`
         */
        PhysicalConnectionId: string;
        /**
         * 物理专线类型。取值：
         * - **VirtualPhysicalConnection**：共享专线。
         * - **PhysicalConnection**：独享专线。
         * @example `VirtualPhysicalConnection`
         */
        ProductType: string;
        /**
         * 物理专线的实例ID。
         * @example `pc-bp1ciz7ekd2grn1as****`
         */
        ParentPhysicalConnectionId: string;
        /**
         * 共享专线的业务状态。取值：
         * - **Confirmed**：共享专线已确认接收。
         * - **UnConfirmed**：共享专线未被确认接收。
         * - **Deleted**：共享专线已被删除。
         * @example `Confirmed`
         */
        VirtualPhysicalConnectionStatus: string;
        /**
         * 物理专线所属的阿里云账号（主账号）ID。
         * @example `18311773240248****`
         */
        ParentPhysicalConnectionAliUid: string;
        /**
         * 共享专线的付费方式。取值：
         * - **PayByPhysicalConnectionOwner**：表示共享专线关联的物理专线的拥有者付费。
         * - **PayByVirtualPhysicalConnectionOwner**：表示共享专线的拥有者付费。
         * @example `PayByPhysicalConnectionOwner`
         */
        OrderMode: string;
        /**
         * 共享专线拥有者的阿里云账号（主账号）ID。
         * @example `15346073170691****`
         */
        AliUid: string;
        /**
         * 共享专线的VLAN ID。
         * @example `10`
         */
        VlanId: string;
        /**
         * 共享专线的预计带宽值。完成支付后，预计带宽值才能生效。
         * 单位：**M**表示Mbps，**G**表示Gbps。
         * @example `50M`
         */
        ExpectSpec: string;
        /**
         * 共享专线所属的资源组ID。
         * @example `rg-acfm3wmsyui****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 资源的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
             * 最多支持64个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
             * 最多支持128个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `dd20****`
     */
    NextToken: string;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次查询的条目数。
     * @example `1`
     */
    Count: number;
}
