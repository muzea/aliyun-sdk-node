export interface SwitchInstanceHARequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 数据分片节点ID，您可以调用[DescribeRoleZoneInfo](~~190794~~)获取CustinsId参数，多个数据分片节点ID之间使用英文逗号（,）分隔，如需指定所有节点请输入`all`。
     * > 当Redis实例为集群或读写分离架构时，本参数才可用，且必填。
     * @example `56****19,56****20`
     */
    "NodeId"?: string;
    /**
     * 执行时间，取值：
     * * **0**：立即执行，默认值。
     * * **1**：在可维护时间段执行。
     * > 您可以调用[ModifyInstanceMaintainTime](~~61000~~)修改Redis实例的可维护时间段。
     * @example `0`
     */
    "SwitchMode"?: number;
    /**
     * 切换模式，取值：
     * * **AvailablePriority**：可用性优先，不考虑主从延迟，立即执行主从切换，可能会丢失少量数据。
     * * **ReliabilityPriority**：可靠性优先，确保主从同步无延迟时才执行主从切换，不会丢失数据。该模式在写入量较大且持续存在同步延迟的场景下，可能会造成主从切换失败。
     * > 您需要根据业务场景对数据、服务等方面的需求进行衡量，然后选取切换模式。
     * @example `AvailablePriority`
     */
    "SwitchType"?: string;
}
