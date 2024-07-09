export interface SetDomainResponse {
    /**
     * 请求唯一标识
     * @example `0AA90E87-3506-5AA6-AFFB-A4D53B4F6231`
     */
    RequestId: string;
    /**
     * 域名合法状态，取值：
     * - **NORMAL**：正常
     * - **ABNORMAL**：异常，该状态会影响API调用，需尽快解决
     * @example `NORMAL`
     */
    DomainLegalStatus: string;
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    GroupId: string;
    /**
     * 系统给分组绑定的二级域名，用于测试API调用
     * @example `xxx-cn-hangzhou.alicloudapi.com`
     */
    SubDomain: string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    DomainName: string;
    /**
     * 自定义域名绑定状态
     * - **BINDING**：正常
     * - **BOUND**：未生效
     * @example `BINDING`
     */
    DomainBindingStatus: string;
    /**
     * 域名相关备注，如描述域名异常状态原因
     * @example `无`
     */
    DomainRemark: string;
    /**
     * 使用WebSocket功能的域名状态
     * @example `NORMAL`
     */
    DomainWebSocketStatus: string;
}
