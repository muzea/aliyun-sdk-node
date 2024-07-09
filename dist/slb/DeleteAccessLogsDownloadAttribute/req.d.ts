export interface DeleteAccessLogsDownloadAttributeRequest {
    /**
     * 传统型负载均衡实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例绑定的标签列表，其结构是一个JSON dictionary，包含标签键和标签值。
     * @example `[{"tagKey":"Key1","tagValue":"Value1"}]`
     */
    "Tags"?: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-uf68ps3rekbljmdb0****`
     */
    "LoadBalancerId"?: string;
    /**
     * 访问日志转发规则。组成参数：
     * - **LogProject**：日志服务LogProject的名称。
     * - **LogStore**：日志服务LogStore的名称。
     * - **LoadBalancerId**：传统型负载均衡实例ID。
     * @example `[{"logProject":"my-project", "LogStore":"my-log-store", "LoadBalancerId":"lb-uf68ps3rekbljmdb0****"}]`
     */
    "LogsDownloadAttributes": string;
}
