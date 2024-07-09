export interface CreateVpcEndpointRequest {
    /**
     * 实例ID。
     * @example `es-cn-2r429tctl000d****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值含义如下：
     * - true：发送检查请求，不会创建终端节点。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。
     * - false（默认值）：立即触发创建终端节点。
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 终端节点服务信息。
     */
    "body"?: {
        /**
         * 您创建的终端节点服务ID。服务VPC侧终端节点将要关联的此服务ID。
         * @example `epsrv-hp3xdsq46ael67lo****`
         */
        serviceId: string;
        /**
         * 您创建的终端节点服务对应的可用区ID。
         * @example `cn-hangzhou-i`
         */
        zoneId: string;
    };
}
