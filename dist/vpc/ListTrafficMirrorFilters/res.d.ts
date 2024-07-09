export interface ListTrafficMirrorFiltersResponse {
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
     * 列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 当前请求要查询的最大数量。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次查询返回的数量。
     * @example `5`
     */
    Count: number;
    /**
     * 流量镜像筛选条件的详情列表。
     */
    TrafficMirrorFilters: {
        /**
         * 流量镜像筛选条件的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：已创建。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * @example `Created`
         */
        TrafficMirrorFilterStatus: string;
        /**
         * 流量镜像筛选条件的描述信息。
         * @example `This is a filter.`
         */
        TrafficMirrorFilterDescription: string;
        /**
         * 流量镜像筛选条件的实例ID。
         * @example `tmf-j6cmls82xnc86vtpe****`
         */
        TrafficMirrorFilterId: string;
        /**
         * 流量镜像筛选条件的名称。
         * @example `abc`
         */
        TrafficMirrorFilterName: string;
        /**
         * 入方向规则详情列表。
         */
        IngressRules: {
            /**
             * 人方向规则的状态。取值：
             * - **Creating**：创建中。
             * - **Created**：已创建。
             * - **Modifying**：修改中。
             * - **Deleting**：删除中。
             * @example `Created`
             */
            TrafficMirrorFilterRuleStatus: string;
            /**
             * 入方向规则的采集策略，取值：
             * - **accept**：采集网络流量。
             * - **drop**：不采集网络流量。
             * @example `accept`
             */
            Action: string;
            /**
             * 入方向规则网络流量的源地址网段。
             * @example `0.0.0.0/0`
             */
            SourceCidrBlock: string;
            /**
             * 网络流量的方向，取值：
             * - **egress**：出方向。
             * - **ingress**：入方向。
             * @example `ingress`
             */
            TrafficDirection: string;
            /**
             * 入方向需要镜像的网络流量使用的协议类型，取值：
             * - **ALL**：所有协议。
             * - **ICMP**：网络控制报文协议。
             * - **TCP**：传输控制协议。
             * - **UDP**：用户数据报协议。
             * @example `ALL`
             */
            Protocol: string;
            /**
             * 入方向规则网络流量的目的端口范围。
             * @example `-1/-1`
             */
            DestinationPortRange: string;
            /**
             * 入方向规则的实例ID。
             * @example `tmr-j6cezu8e68rnpepet****`
             */
            TrafficMirrorFilterRuleId: string;
            /**
             * 入方向规则网络流量的目的地址网段。
             * @example `0.0.0.0/0`
             */
            DestinationCidrBlock: string;
            /**
             * 入方向规则的优先级。数字越小，优先级越高。
             * @example `1`
             */
            Priority: number;
            /**
             * 入方向规则关联的流量镜像筛选条件实例ID。
             * @example `tmf-j6cmls82xnc86vtpe****`
             */
            TrafficMirrorFilterId: string;
            /**
             * 入方向规则网络流量的目的端口范围。
             * @example `-1/-1`
             */
            SourcePortRange: string;
        }[];
        /**
         * 出方向规则详情列表。
         */
        EgressRules: {
            /**
             * 出方向规则的状态。取值：
             * - **Creating**：创建中。
             * - **Created**：已创建。
             * - **Modifying**：修改中。
             * - **Deleting**：删除中。
             * @example `Created`
             */
            TrafficMirrorFilterRuleStatus: string;
            /**
             * 出方向规则的采集策略，取值：
             * - **accept**：采集网络流量。
             * - **drop**：不采集网络流量。
             * @example `accept`
             */
            Action: string;
            /**
             * 出方向规则网络流量的源地址网段。
             * @example `10.0.0.0/24`
             */
            SourceCidrBlock: string;
            /**
             * 网络流量的方向，取值：
             * - **egress**：出方向。
             * - **ingress**：入方向。
             * @example `egress`
             */
            TrafficDirection: string;
            /**
             * 出方向需要镜像的网络流量使用的协议类型，取值：
             * - **ALL**：所有协议。
             * - **ICMP**：网络控制报文协议。
             * - **TCP**：传输控制协议。
             * - **UDP**：用户数据报协议。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 出方向规则网络流量的目的端口范围。
             * @example `22/40`
             */
            DestinationPortRange: string;
            /**
             * 出方向规则的实例ID。
             * @example `tmr-j6c89rzmtd3hhdugq****`
             */
            TrafficMirrorFilterRuleId: string;
            /**
             * 出方向规则网络流量的目的地址网段。
             * @example `10.0.0.0/24`
             */
            DestinationCidrBlock: string;
            /**
             * 出方向规则的优先级。数字越小，优先级越高。
             * @example `1`
             */
            Priority: number;
            /**
             * 出方向规则关联的流量镜像筛选条件实例ID。
             * @example `tmf-j6cmls82xnc86vtpe****`
             */
            TrafficMirrorFilterId: string;
            /**
             * 出方向规则网络流量的源端口范围。
             * @example `22/40`
             */
            SourcePortRange: string;
        }[];
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
         * 流量镜像筛选条件的创建时间。
         * @example `2023-09-05T15:26Z`
         */
        CreationTime: string;
    }[];
}
