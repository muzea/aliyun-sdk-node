export interface ListTrafficMirrorSessionsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `739CA01C-92EB-4C69-BCC0-280149C6F41E`
     */
    RequestId: string;
    /**
     * 返回结果总数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 镜像会话的详情列表。
     */
    TrafficMirrorSessions: {
        /**
         * 镜像目的的实例ID。
         * @example `eni-j6c2fp57q8rr47rp****`
         */
        TrafficMirrorTargetId: string;
        /**
         * 镜像会话的实例ID。
         * @example `tms-j6cla50buc44ap8tu****`
         */
        TrafficMirrorSessionId: string;
        /**
         * 镜像会话的优先级。
         * 数字越小，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 镜像目的类型，取值：
         * - **NetworkInterface**：弹性网卡。
         * - **SLB**：私网负载均衡实例。
         * @example `NetworkInterface`
         */
        TrafficMirrorTargetType: string;
        /**
         * 指定被镜像的原始报文长度（不包含VXLAN报文长度），默认值**1500**，取值范围：**64**～**8500**，单位：字节。
         * - 该参数的大小会影响镜像目的收到的报文长度，详情请参见[流量镜像概述](~~207513~~)中的镜像报文长度和MTU限制。
         * - 该参数仅在部分地域可用，详情请参见[创建和管理流量镜像](~~207514~~)中的镜像报文长度参数描述。
         * @example `1500`
         */
        PacketLength: number;
        /**
         * 镜像会话的描述信息。
         * @example `This is a session.`
         */
        TrafficMirrorSessionDescription: string;
        /**
         * 镜像会话的状态，取值：
         * - **Creating**：创建中。
         * - **Created**：已创建。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * @example `Created`
         */
        TrafficMirrorSessionStatus: string;
        /**
         * 是否已开启流量会话，取值：
         * - **false**（默认值）：不开启流量会话。
         * - **true**：开启流量会话。
         * @example `false`
         */
        Enabled: boolean;
        /**
         * 镜像会话的业务状态，取值：
         * - **Normal**：正常。
         * - **FinancialLocked**：欠费锁定。
         * @example `Normal`
         */
        TrafficMirrorSessionBusinessStatus: string;
        /**
         * 指定VNI，用来区分不同的镜像流量。
         * @example `10`
         */
        VirtualNetworkId: number;
        /**
         * 流量镜像筛选条件的实例ID。
         * @example `tmf-j6cmls82xnc86vtpe****`
         */
        TrafficMirrorFilterId: string;
        /**
         * 镜像会话的名称。
         * @example `abc`
         */
        TrafficMirrorSessionName: string;
        /**
         * 镜像源的实例ID。
         */
        TrafficMirrorSourceIds: string[];
        /**
         * 流量镜像所属的资源组ID。
         * @example `rg-bp67acfmxazb4ph****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
        /**
         * 镜像会话的创建时间。
         * @example `2023-09-05T15:26Z`
         */
        CreationTime: string;
    }[];
}
