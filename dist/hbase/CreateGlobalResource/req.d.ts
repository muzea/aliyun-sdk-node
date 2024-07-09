export interface CreateGlobalResourceRequest {
    /**
     * 目标实例ID，可调用DescribeInstances接口获取。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 资源名称，取值：
     * - HbaseSLBThriftVip：表示Thrift SLB服务资源。
     * - SolrSlbVip：表示Solr SLB服务资源。
     * - PhoenixSLBQueryServerVip：表示Phoenix SLB服务资源。
     * - PubHbaseSLBThriftVip：表示Thrift SLB公网资源。
     * - PubPhoenixSLBQueryServerVip：表示Phoenix SLB公网资源。
     * @example `PubPhoenixSLBQueryServerVip`
     */
    "ResourceName": string;
    /**
     * 资源类型，取值固定为**GLOBAL_VIP**。
     * @example `GLOBAL_VIP`
     */
    "ResourceType": string;
    /**
     * 该参数发送请求时自动补充，无需填写。
     * @example `xxxxx-xxxxx-xxxxx`
     */
    "ClientToken"?: string;
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
