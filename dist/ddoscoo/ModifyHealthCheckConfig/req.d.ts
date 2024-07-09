export interface ModifyHealthCheckConfigRequest {
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
     * 健康检查配置的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **Type**：String类型，必选，协议类型。取值：**tcp**（四层）、**http**（七层）。
     * - **Domain**：String类型，可选，域名。
     *     > 仅适用于七层健康检查。
     * - **Uri**：String类型，可选，检查路径。
     *     > 仅适用于七层健康检查。
     * - **Timeout**：Integer类型，可选，响应超时时间。取值范围：**1**~**30**，单位：秒。
     * - **Port**：Integer类型，可选，检查端口。
     * - **Interval**：Integer类型，可选，检查间隔。取值范围：**1**~**30**，单位：秒。
     * - **Up**：Integer类型，可选，健康阈值。取值范围：**1**~**10**。
     * - **Down**：Integer类型，可选，不健康阈值。取值范围：**1**~**10**。
     * @example `{"Type":"tcp","Timeout":10,"Port":8080,"Interval":10,"Up":10,"Down":40}`
     */
    "HealthCheck": string;
}
