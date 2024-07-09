export interface ModifyNetworkRuleAttributeRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 转发协议。取值：
     * - **tcp**
     * - **udp**
     * @example `tcp`
     */
    "ForwardProtocol": string;
    /**
     * 转发端口。
     * @example `8080`
     */
    "FrontendPort": number;
    /**
     * 端口转发规则的会话保持设置。使用JSON格式的字符串表述，具体结构描述如下。
     * - **PersistenceTimeout**：Integer类型，必选，会话保持的超时时间。取值范围：**30**~**3600**，单位：秒。默认为**0**，表示关闭。
     * @example `{"PersistenceTimeout":900}`
     */
    "Config": string;
}
