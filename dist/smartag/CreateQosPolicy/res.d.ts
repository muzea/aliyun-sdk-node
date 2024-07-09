export interface CreateQosPolicyResponse {
    /**
     * QoS策略流分类规则的描述。
     * @example `desctest`
     */
    Description: string;
    /**
     * QoS策略流分类规则生效结束时间。
     * @example `2022-09-14T16:41:33+0800`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `97862812-2C7E-4D25-B0D5-B26DAC7FA293`
     */
    RequestId: string;
    /**
     * QoS策略流分类规则的实例ID。
     * @example `qospy-xhwhyuo43l********`
     */
    QosPolicyId: string;
    /**
     * 源端口范围。
     * @example `80/80`
     */
    SourcePortRange: string;
    /**
     * 源网段。
     * @example `10.10.10.0/24`
     */
    SourceCidr: string;
    /**
     * QoS策略流分类规则所属的限速规则优先级。
     * @example `3`
     */
    Priority: number;
    /**
     * QoS策略流分类规则生效开始时间。
     * @example `2022-07-14T16:41:33+0800`
     */
    StartTime: string;
    /**
     * 目的端口范围。
     * @example `80/80`
     */
    DestPortRange: string;
    DpiGroupIds: {
        /**
         * 应用组信息。
         */
        DpiGroupId: string[];
    };
    /**
     * QoS策略流分类规则名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * 目的网段。
     * @example `10.10.10.0/24`
     */
    DestCidr: string;
    DpiSignatureIds: {
        /**
         * 应用信息。
         */
        DpiSignatureId: string[];
    };
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    QosId: string;
    /**
     * QoS策略流分类规则应用的协议类型。
     * @example `TCP`
     */
    IpProtocol: string;
}
