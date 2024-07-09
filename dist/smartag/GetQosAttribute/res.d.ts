export interface GetQosAttributeResponse {
    /**
     * QoS策略实例的五元组规则信息列表。
     */
    QosPolicies: {
        /**
         * 五元组规则失效时间。
         * 时间显示为北京时间，格式为：UTC时间+8小时。
         * @example `2021-07-29T00:00:00+0800`
         */
        EndTime: number;
        /**
         * 五元组规则开始生效时间。
         * @example `2021-06-21T00:00:00+0800`
         */
        StartTime: number;
        /**
         * 目的网段。
         * @example `0.0.0.0/0`
         */
        DestCidr: string;
        /**
         * 目的端口范围。
         * 取值范围：**-1**或**1**~**65535**。
         * 目的端口范围格式示例：
         * - **1/200**，表示端口范围1至200。
         * - **80/80**，表示端口80。
         * - **-1/-1**，表示不限制端口。
         * @example `-1/-1`
         */
        DestPortRange: string;
        /**
         * 五元组规则应用的协议类型。
         * @example `ALL`
         */
        IpProtocol: string;
        /**
         * 五元组规则所属的限速规则的优先级。
         * 数值越小，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 五元组规则的描述信息。
         * @example `test`
         */
        QosPolicieDescription: string;
        /**
         * 源网段。
         * @example `0.0.0.0/0`
         */
        SourceCidr: string;
        /**
         * 五元组规则名称。
         * @example `test`
         */
        QosPolicieName: string;
        /**
         * 源端口范围。
         * 取值范围：**-1**或**1**~**65535**。
         * 源端口范围格式例如：
         * - **1/200**，表示端口范围1至200。
         * - **80/80**，表示端口80。
         * - **-1/-1**，表示不限制端口。
         * @example `-1/-1`
         */
        SourcePortRange: string;
    }[];
    /**
     * 配置异常的QoS策略限速规则信息。
     */
    QosCars: {
        /**
         * 最大带宽。单位：Mbps。
         * @example `2`
         */
        MaxBandwidthAbs: number;
        /**
         * 限速规则的名称。
         * @example `test`
         */
        QosCarName: string;
        /**
         * 按百分比限速时的带宽类型：
         * - **CcnBandwidth**：云连接网带宽。
         * - **InternetUpBandwidth**：公网上行带宽。
         * @example `InternetUpBandwidth`
         */
        PercentSourceType: string;
        /**
         * 最小带宽。单位：Mbps。
         * @example `1`
         */
        MinBandwidthAbs: number;
        /**
         * 最大带宽百分比。
         * @example `20`
         */
        MaxBandwidthPercent: number;
        /**
         * 限速规则的描述信息。
         * @example `test`
         */
        QosCarDescription: string;
        /**
         * 限速类型：
         * - **Absolute**：按带宽值。
         * - **Percent**：按百分比。
         * @example `Absolute`
         */
        LimitType: string;
        /**
         * 限速规则的优先级。
         * 优先级支持设置**1**~**3**级，数值越小，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 最小带宽百分比。
         * @example `10`
         */
        MinBandwidthPercent: number;
        /**
         * 限速规则ID。
         * @example `qoscar-xir1apa8ayjp56ei****`
         */
        QosCarId: string;
    }[];
    /**
     * 请求ID。
     * @example `91058E01-1806-45D5-B305-19E4D0A5CE04`
     */
    RequestId: string;
    /**
     * 配置异常的智能接入网关实例个数。
     * @example `1`
     */
    ErrorConfigSmartAGCount: number;
    /**
     * QoS策略实例的名称。
     * @example `test`
     */
    QosName: string;
    /**
     * QoS策略实例的描述信息。
     * @example `test`
     */
    QosDescription: string;
}
