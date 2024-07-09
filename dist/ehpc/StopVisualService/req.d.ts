export interface StopVisualServiceRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 允许访问VNC服务的源地址范围，用于设置安全组。
     * @example `100.168.XX.XX`
     */
    "CidrIp": string;
    /**
     * 固定端口。取值：12016
     * @example `12016`
     */
    "Port": number;
}
