export interface CreateTrafficMirrorFilterRequest {
    /**
     * 流量镜像筛选条件的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `this is a filter.`
     */
    "TrafficMirrorFilterDescription"?: string;
    /**
     * 流量镜像筛选条件的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "TrafficMirrorFilterName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建流量镜像筛选条件。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接创建筛选条件。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 入方向规则信息。
     */
    "IngressRules"?: {
        /**
         * 入方向规则的采集策略。取值：
         * - **accept**：采集网络流量。
         * - **drop**：不采集网络流量。
         * @example `accept`
         */
        Action: string;
        /**
         * 入方向规则网络流量的源地址网段。
         * @example `10.0.0.0/24`
         */
        SourceCidrBlock: string;
        /**
         * 入方向需要镜像的网络流量使用的协议类型。取值：
         * - **ALL**：所有协议。
         * - **ICMP**：网络控制报文协议。
         * - **TCP**：传输控制协议。
         * - **UDP**：用户数据报协议。
         * @example `TCP`
         */
        Protocol: string;
        /**
         * 入方向规则网络流量的目的端口范围。端口范围为**1**~**65535**，使用正斜线（/）隔开起始端口和终止端口，格式为**1/200**、**80/80**。
         * > 当**IngressRules.N.Protocol**取值为**ALL**或**ICMP**时，该参数无需设置，表示不限制端口。
         * @example `80/120`
         */
        DestinationPortRange: string;
        /**
         * 入方向规则的优先级。数字越小，优先级越高。
         * 其中**N**最大取值为**10**，即一个筛选条件最多可配置10条入方向规则。
         * @example `1`
         */
        Priority: number;
        /**
         * 入方向规则网络流量的目的地址网段。
         * @example `10.0.0.0/24`
         */
        DestinationCidrBlock: string;
        /**
         * 入方向规则网络流量的源端口范围。端口范围为**1**~**65535**，使用正斜线（/）隔开起始端口和终止端口，格式为**1/200**、**80/80**。
         * > 当**IngressRules.N.Protocol**取值为**ALL**或**ICMP**时，该参数无需配置，表示不限制端口。
         * @example `80/120`
         */
        SourcePortRange: string;
    }[];
    /**
     * 出方向规则的信息。
     */
    "EgressRules"?: {
        /**
         * 出方向规则的采集策略。取值：
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
         * 出方向需要镜像的网络流量使用的协议类型。取值：
         * - **ALL**：所有协议。
         * - **ICMP**：网络控制报文协议。
         * - **TCP**：传输控制协议。
         * - **UDP**：用户数据报协议。
         * @example `TCP`
         */
        Protocol: string;
        /**
         * 出方向规则网络流量的目的端口范围。端口范围为**1**~**65535**，使用正斜线（/）隔开起始端口和终止端口，格式为**1/200**、**80/80**，其中**-1/-1**不能单独设置，代表不限制端口。
         * > 当**EgressRules.N.Protocol**取值为**ALL**或**ICMP**时，该参数无需配置，表示不限制端口。
         * @example `22/40`
         */
        DestinationPortRange: string;
        /**
         * 出方向规则的优先级。数字越小，优先级越高。
         * 其中**N**最大取值为**10**，即一个筛选条件最多可配置10条出方向规则。
         * @example `1`
         */
        Priority: number;
        /**
         * 出方向规则网络流量的目的地址网段。
         * @example `10.0.0.0/24`
         */
        DestinationCidrBlock: string;
        /**
         * 出方向规则网络流量的源端口范围。端口范围为**1**~**65535**，使用正斜线（/）隔开起始端口和终止端口，格式为**1/200**、**80/80**，其中**-1/-1**不能单独设置，代表不限制端口。
         * > 当**EgressRules.N.Protocol**取值为**ALL**或**ICMP**时，该参数无需配置，表示不限制端口。
         * @example `22/40`
         */
        SourcePortRange: string;
    }[];
    /**
     * 流量镜像的所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
    /**
     * 流量镜像所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
