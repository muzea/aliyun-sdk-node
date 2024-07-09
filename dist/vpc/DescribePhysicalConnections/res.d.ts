export interface DescribePhysicalConnectionsResponse {
    /**
     * 请求ID。
     * @example `0E6D0EC4-7C91-53E2-9F65-64BF713114B0`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页显示的条目数。默认值：**10**。  取值范围：**1**~**50**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    PhysicalConnectionSet: {
        /**
         * 物理专线信息列表。
         */
        PhysicalConnectionType: {
            /**
             * 物理专线的类型。取值：**VPC**。
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
             *
             * - **Allocation Failed**：资源分配失败。
             * - **Terminating**：终止中。
             * - **Terminated**：已终止。
             * @example `Enabled`
             */
            Status: string;
            /**
             * 物理专线的创建时间。
             * @example `2021-08-24T07:30:58Z`
             */
            CreationTime: string;
            /**
             * 物理专线接入设备所在接入点位置。
             * @example `浙江省杭州市XX区XX镇XX路10号`
             */
            AdLocation: string;
            /**
             * 未生效订单的生效时间。
             * @example `2022-02-25T11:01:04Z`
             */
            ReservationActiveTime: string;
            /**
             * 未生效订单的订单类型。
             * 取值：**RENEW**，表示续费订单。
             * @example `RENEW`
             */
            ReservationOrderType: string;
            /**
             * 物理专线接入设备的端口号。
             * @example `1/1/1`
             */
            PortNumber: string;
            /**
             * 物理专线的规格。
             * 单位：**G**表示Gbps。
             * @example `10G`
             */
            Spec: string;
            /**
             * 物理专线的付费方式。
             * 取值：**Prepaid**，表示预付费。
             * @example `Prepaid`
             */
            ChargeType: string;
            /**
             * 未生效订单的付费类型。
             * 取值：**PayByBandwidth**，表示按使用带宽付费。
             * @example `PayByBandwidth`
             */
            ReservationInternetChargeType: string;
            /**
             * 物理专线的描述信息。
             * @example `desctest`
             */
            Description: string;
            /**
             * 物理专线的带宽。
             * 单位：Mbps。
             * @example `10`
             */
            Bandwidth: number;
            /**
             * 物理专线的开通时间。
             * @example `2021-08-24T07:33:18Z`
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
             *
             * @example `CT`
             */
            LineOperator: string;
            /**
             * 本地数据中心的地理位置。
             * @example `浙江省杭州市XX区XX镇XX路XX号`
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
             * 物理专线的到期时间。
             * @example `2022-04-24T16:00:00Z`
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
             * > 40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
             * @example `10GBase-LR`
             */
            PortType: string;
            /**
             * 物理专线的商业状态。取值：
             *
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
             * 物理专线接入点的ID。
             * @example `ap-cn-hangzhou-finance-yh-E`
             */
            AccessPointId: string;
            /**
             * 物理专线接入点类型。
             * @example `VPC`
             */
            AccessPointType: string;
            /**
             * 是否包含未生效的订单数据。取值：
             * * **true**：包含。
             * * **false**：未包含。
             * @example `false`
             */
            HasReservationData: string;
            /**
             * 物理专线的实例ID。
             * @example `pc-bp1ciz7ekd2grn1as****`
             */
            PhysicalConnectionId: string;
            /**
             * 物理专线类型。取值：
             * - **VirtualPhysicalConnection**：共享专线。
             * - **PhysicalConnection**：独享专线。
             * @example `PhysicalConnection`
             */
            ProductType: string;
            /**
             * 当前物理专线下已创建的共享专线数量。
             * @example `0`
             */
            VirtualPhysicalConnectionCount: number;
            /**
             * 共享专线关联的物理专线实例ID。
             * @example `pc-bp1ciz7ekd2grn1as****`
             */
            ParentPhysicalConnectionId: string;
            /**
             * 共享专线关联的物理专线所属的阿里云账号（主账号）ID。
             * @example `132193271328****`
             */
            ParentPhysicalConnectionAliUid: number;
            /**
             * 共享专线的VLAN ID。
             * @example `10`
             */
            VlanId: string;
            /**
             * 共享专线的付费方式。取值：
             * - **PayByPhysicalConnectionOwner**：表示合作伙伴付费。
             * - **PayByVirtualPhysicalConnectionOwner**：表示租户付费。
             * @example `PayByPhysicalConnectionOwner`
             */
            OrderMode: string;
            /**
             * 共享专线的业务状态。取值：
             * - **Confirmed**：共享专线已确认接收。
             * - **UnConfirmed**：共享专线未被确认接收。
             * - **Deleted**：共享专线已被删除。
             * @example `Confirmed`
             */
            VpconnStatus: string;
            /**
             * 共享专线的预计带宽值。完成支付后，预计带宽值才能生效。
             * 单位：**M**表示Mbps，**G**表示Gbps。
             * @example `50M`
             */
            ExpectSpec: string;
            /**
             * 资源组ID。
             * @example `rg-acfmwu3k52p****`
             */
            ResourceGroupId: string;
            /**
             * 表示机房及机柜的信息。
             * @example `浙江省杭州市XX区XX镇XX路10号, XX机房, ET135ET135-XX-2包间, JXX机柜,  position30`
             */
            AdDetailLocation: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                tags: {
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
            };
            /**
             * QoS策略实例ID。
             * @example `qos-bp10s3szn8rgnxuw7****`
             */
            QosId: string;
        }[];
    };
}
