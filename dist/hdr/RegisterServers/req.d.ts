export interface RegisterServersRequest {
    /**
     * 站点对ID
     * @example `s-000cm9ax8sgzwujrzdwt`
     */
    "SitePairId"?: string;
    /**
     * 注册服务器信息
     * @example `"[{\"instanceId\":\"i-uf60ngpe9sseu5gsgu45\",\"privateIpAddress\":\"192.168.1.198\",\"osType\":\"linux\",\"osName\":\"CentOS  7.8 64位\",\"cpu\":2,\"memory\":4294967296,\"hostName\":\"hdr-test\"}]"`
     */
    "ServerInstancesInfo"?: string;
    /**
     * 代理服务端口，默认9080
     * @example `9080`
     */
    "AgentPort"?: number;
}
