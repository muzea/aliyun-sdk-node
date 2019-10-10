interface AddVServerGroupBackendServersRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 服务器组ID。
    * @example `rsp-cige6j5e7p`
    */ "VServerGroupId": string;
    /**
    * 服务器组列表。单次调用最多可添加20个后端服务器。
    * 服务器组列表需要包含以下参数：
    * - **ServerId**：ECS实例ID。
    * - **Port**：必选参数，表示后端服务器使用的端口。取值范围：**1~65535**。
    * - **Weight**：后端服务器的权重，取值：0~100。默认值为100。如果值为0，则不会将请求转发给该后端服务器。
    * - **Type**：后端服务器类型，取值：
    *     -  **ecs**: ECS实例（默认）
    *     - **eni**：弹性网卡实例
    * @example `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.11.1", "Port":"80" }, { "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.11.2", "Port":"80" }]`
    */ "BackendServers": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { AddVServerGroupBackendServersRequest };