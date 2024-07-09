export interface MoveResourceGroupRequest {
    /**
     * 新资源组ID。
     * @example `rg-aekzjcnrv3v****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源类型，取值：
     * - **loadbalancer**：网络型负载均衡实例。
     * - **securitypolicy**：安全策略。
     * - **servergroup**：服务器组。
     * @example `loadbalancer`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `nlb-nrnrxwd15en27r****`
     */
    "ResourceId": string;
    /**
     * 资源所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
