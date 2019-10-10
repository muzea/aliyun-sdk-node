interface RemoveBackendServersRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-east-hangzhou-01`
    */ "RegionId"?: string;
    /**
    * 要移除的后端服务器。
    * > 一次调用最多可以移除20个后端服务器。
    * @example `[{"ServerId":"i-2zej4lxhjoq1icue6kup","Weight":"100"},{"ServerId":"i-2ze1u9ywulp5pbvvc7hv","Weight":"100"}]`
    */ "BackendServers": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1qjwo61pqz3ahl*****`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { RemoveBackendServersRequest };