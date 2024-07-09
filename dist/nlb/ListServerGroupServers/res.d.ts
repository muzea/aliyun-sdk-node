export interface ListServerGroupServersResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 服务器列表。
     */
    Servers: {
        /**
         * 后端服务器ID。
         * @example `i-bp67acfmxazb4p****`
         */
        ServerId: string;
        /**
         * 后端服务器类型，取值：
         * - **Ecs**：ECS实例。
         * - **Eni**：ENI弹性网卡实例。
         * - **Eci**：ECI弹性容器。
         * - **Ip**：IP地址。
         * @example `Ecs`
         */
        ServerType: string;
        /**
         * 后端服务器IP地址。
         * @example `192.168.2.1`
         */
        ServerIp: string;
        /**
         * 后端服务器使用的端口。取值范围：**1**~**65535**。
         * @example `80`
         */
        Port: number;
        /**
         * 后端服务器的权重。
         * @example `100`
         */
        Weight: number;
        /**
         * 服务器组ID。
         * @example `sgp-atstuj3rtoptyui****`
         */
        ServerGroupId: string;
        /**
         * 后端服务器描述。
         * @example `ECS`
         */
        Description: string;
        /**
         * 服务器对应的可用区ID。
         * @example `cn-hangzhou-a`
         */
        ZoneId: string;
        /**
         * 后端服务器的添加状态。取值：
         * - **Adding**：添加中。
         * - **Available**：正常可用状态。
         * - **Configuring**：配置中。
         * - **Removing**：移除中。
         * @example `Available`
         */
        Status: string;
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
