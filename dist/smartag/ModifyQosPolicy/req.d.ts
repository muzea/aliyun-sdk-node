export interface ModifyQosPolicyRequest {
    /**
     * QoS策略实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略的实例ID。
     * @example `qos-xitd8690ucu8ro****`
     */
    "QosId": string;
    /**
     * QoS策略流分类规则实例ID。
     * @example `qospy-427m9fo6wkh****`
     */
    "QosPolicyId": string;
    /**
     * 设置QoS策略流分类规则所属的限速规则的优先级。
     *
     * 优先级范围：**1~3**。数值越小，优先级越高。
     * @example `3`
     */
    "Priority"?: number;
    /**
     * 源网段。
     * 源网段格式为CIDR格式。例如：192.168.1.0/24。
     * @example `10.10.10.0/24`
     */
    "SourceCidr"?: string;
    /**
     * 目的网段。
     * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
     * @example `10.10.20.0/24`
     */
    "DestCidr"?: string;
    /**
     * QoS策略流分类规则应用的协议类型。
     * QoS策略流分类规则支持的协议类型，请以控制台为准。
     * @example `TCP`
     */
    "IpProtocol"?: string;
    /**
     * 源端口范围。
     * 取值范围：**-1**或**1**~**65535**。
     * 源端口范围格式例如：
     * - **1/200**，表示端口范围1~200。
     * - **80/80**，表示端口80。
     * - **-1/-1**，表示不限制端口。
     * @example `1/200`
     */
    "SourcePortRange"?: string;
    /**
     * 目的端口范围。
     * 取值范围：**-1**或**1**~**65535**。
     * 目的端口范围格式例如：
     * - **1/200**，表示端口范围1至200。
     * - **80/80**，表示端口80。
     * - **-1/-1**，表示不限制端口。
     * @example `300/400`
     */
    "DestPortRange"?: string;
    /**
     * QoS策略流分类规则开始生效时间。
     * 时间按照ISO8601标准表示，并使用UTC时间+8小时。格式为：YYYY-MM-DDThh:mm:ss+0800。
     * @example `2019-07-14T16:41:33+0800`
     */
    "StartTime"?: string;
    /**
     * QoS策略流分类规则生效结束时间。
     * 时间按照ISO8601标准表示，并使用UTC时间+8小时。格式为：YYYY-MM-DDThh:mm:ss+0800。
     * @example `2019-09-14T16:41:33+0800`
     */
    "EndTime"?: string;
    /**
     * QoS策略流分类规则的描述信息。
     * 描述长度为1~512个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `desctest`
     */
    "Description"?: string;
    /**
     * QoS策略流分类规则名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `nametest`
     */
    "Name"?: string;
    /**
     * 应用ID列表。
     * @example `1`
     */
    "DpiSignatureIds"?: string[];
    /**
     * 应用组ID列表。
     * @example `20`
     */
    "DpiGroupIds"?: string[];
}
