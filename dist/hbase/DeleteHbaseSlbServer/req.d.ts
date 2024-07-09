export interface DeleteHBaseSlbServerRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 负载均衡服务。目前支持
     * thrift
     * rest
     * @example `thrift`
     */
    "SlbServer": string;
}
