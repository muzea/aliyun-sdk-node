export interface DescribeInvadeEventListResponse {
    /**
     * 低风险等级比例。
     * @example `20`
     */
    LowLevelPercent: number;
    /**
     * 本次调用请求的ID。
     * @example `F0F82705-CFC7-5F83-86C8-A063892F****`
     */
    RequestId: string;
    /**
     * 中风险等级比例。
     * @example `40`
     */
    MiddleLevelPercent: number;
    /**
     * 高风险等级比例。
     * @example `40`
     */
    HighLevelPercent: number;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 失陷感知事件的总数量。
         * @example `40`
         */
        TotalCount: number;
    };
    /**
     * 失陷感知事件列表。
     */
    EventList: {
        /**
         * 风险评估等级。取值：
         * - **1**：低危。
         * - **2**：中危。
         * - **3**：高危。
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 失陷感知事件的名称。
         * @example `event_test`
         */
        EventName: string;
        /**
         * 失陷感知事件的ID。
         * @example `69d189e2-ec17-4676-a2fe-02969234****`
         */
        EventKey: string;
        /**
         * 失陷感知事件的UUID。
         * @example `fadd-dfdd-****`
         */
        EventUuid: string;
        /**
         * 成员账号UID。
         * @example `135809047715****`
         */
        MemberUid: string;
        /**
         * 受影响的资产类型。取值：
         * - **BastionHostIP**：堡垒机出口IP。
         * - **BastionHostIngressIP**：堡垒机入口IP。
         * - **EcsEIP**：ECS EIP。
         * - **EcsPublicIP**：ECS公网IP。
         * - **EIP**：弹性公网IP。
         * - **EniEIP**：弹性网卡EIP。
         * - **NatEIP**：NAT EIP。
         * - **SlbEIP**：SLB EIP。
         * - **SlbPublicIP**：SLB公网IP。
         * - **NatPublicIP**：NAT公网IP。
         * - **HAVIP**：高可用虚拟IP。
         * @example `EcsPublicIp`
         */
        AssetsType: string;
        /**
         * 失陷感知事件首次出现的时间。使用秒级时间戳格式表示。
         * @example `1656750960`
         */
        FirstTime: number;
        /**
         * 失陷感知事件的来源。取值：
         * - **IPS**：入侵防御事件。
         * - **offline**：离线事件。
         * @example `IPS`
         */
        EventSrc: string;
        /**
         * 受影响资产的私网IP。
         * @example `192.168.XX.XX`
         */
        PrivateIP: string;
        /**
         * 受影的响资产名称。
         * @example `ECS_test`
         */
        AssetsInstanceName: string;
        /**
         * 失陷感知事件最近一次出现的时间。使用秒级时间戳格式表示。
         * @example `1656837360`
         */
        LastTime: number;
        /**
         * 受影响的资产类型。取值：
         * - **BastionHostIP**：堡垒机出口IP。
         * - **BastionHostIngressIP**：堡垒机入口IP。
         * - **EcsEIP**：ECS EIP。
         * - **EcsPublicIP**：ECS公网IP。
         * - **EIP**：弹性公网IP。
         * - **EniEIP**：弹性网卡EIP。
         * - **NatEIP**：NAT EIP。
         * - **SlbEIP**：SLB EIP。
         * - **SlbPublicIP**：SLB公网IP。
         * - **NatPublicIP**：NAT公网IP。
         * - **HAVIP**：高可用虚拟IP。
         * @example `EcsPublicIp`
         */
        PublicIpType: string;
        /**
         * 是否忽略失陷感知事件。取值：
         * - **true**：已忽略。
         * - **false**：未忽略。
         * @example `true`
         */
        IsIgnore: boolean;
        /**
         * 受影响资产的公网IP。
         * @example `198.51.XX.XX`
         */
        PublicIP: string;
        /**
         * 失陷感知事件的处理状态。取值：
         * - **0**：未处理。
         * - **20**：已解决。
         * @example `20`
         */
        ProcessStatus: number;
        /**
         * 受影响的资产实例ID。
         * @example `i-ECS****`
         */
        AssetsInstanceId: string;
    }[];
}
