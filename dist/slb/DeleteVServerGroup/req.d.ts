export interface DeleteVServerGroupRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 虚拟服务器组ID。
     * > 如果已有监听绑定了该虚拟服务器组，将无法删除。
     * @example `rsp-cige6j*****`
     */
    "VServerGroupId": string;
}
