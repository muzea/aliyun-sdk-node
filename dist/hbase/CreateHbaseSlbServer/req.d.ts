export interface CreateHBaseSlbServerRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 需要创建的负载均衡服务，取值：
     * - **thrift**：表示跨语言、跨平台的RPC（Remote Procedure Call，远程过程调用）协议服务。
     * - **rest**：表示HTTP协议服务。
     * @example `thrift`
     */
    "SlbServer": string;
    /**
     * 客户端令牌信息。
     * @example `xxxxx-xxxxx-xxxxx`
     */
    "ClientToken"?: string;
}
