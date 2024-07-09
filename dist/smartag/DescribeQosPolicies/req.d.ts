export interface DescribeQosPoliciesRequest {
    /**
     * QoS策略实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    "QosId": string;
    /**
     * QoS策略五元组规则的实例ID。
     * @example `qospy-427m9fo6wkh****`
     */
    "QosPolicyId"?: string;
    /**
     * QoS策略五元组规则实例的描述。
     * 长度为1~512个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `docdesc`
     */
    "Description"?: string;
    /**
     * 分页查询时每页展示的五元组规则条目数。
     * 默认值：**10**，最大值：**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * QoS策略五元组规则所属的限速规则的优先级。
     * 优先级范围：**1~3**。数值越小，优先级越高。
     * > 如果您已经提交工单申请并通过[CreateQosPolicy](~~131575~~)创建了第4优先级的QoS策略，您可以通过本接口查询第4优先级的QoS策略五元组规则配置信息。
     * @example `1`
     */
    "Priority"?: number;
}
