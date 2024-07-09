export interface ValidateSlrPermissionRequest {
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 服务关联角色名称。可选值：
     * <props="china">- AliyunServiceRoleForElasticsearchOps：执行集群弹性扩缩容任务</props>- AliyunServiceRoleForElasticsearchCollector：创建和管理Beats采集器
     * @example `AliyunServiceRoleForElasticsearchCollector`
     */
    "rolename": string;
}
