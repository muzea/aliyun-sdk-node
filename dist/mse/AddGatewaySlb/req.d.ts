export interface AddGatewaySlbRequest {
    /**
     * SLB ID。
     * @example `lb-bp18t6jjskwxh6wy1****`
     */
    "SlbId": string;
    /**
     * 类型。
     * - PUB_NET: 公网。
     * - PRIVATE_NET: 私网。
     * @example `PUB_NET`
     */
    "Type"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-9cdcf8e4f58144059e73ff4c5ef9****`
     */
    "GatewayUniqueId": string;
    /**
     * http虚拟服务组ID。
     * @example `353`
     */
    "VServerGroupId"?: string;
    /**
     * 服务权重。
     * @example `80`
     */
    "ServiceWeight"?: number;
    /**
     * HTTP端口（虚拟服务组）。
     * @example `80`
     */
    "HttpPort"?: number;
    /**
     * HTTPS端口（虚拟服务组）。
     * @example `443`
     */
    "HttpsPort"?: number;
    /**
     * https虚拟服务组ID。
     * @example `353`
     */
    "HttpsVServerGroupId"?: string;
    /**
     * SLB监听信息。
     */
    "VServiceList"?: {
        /**
         * 虚拟服务器组ID。
         * @example `rsp-bp1j**t0fyl**`
         */
        VServerGroupId: string;
        /**
         *  虚拟服务器组名称。
         * @example `k8s/31**0/***​/istio-system/clusterid`
         */
        VServerGroupName: string;
        /**
         * 端口。
         * @example `443`
         */
        Port: number;
        /**
         * 协议类型：
         * - HTTP
         * - HTTPS
         * @example `HTTPS`
         */
        Protocol: string;
    }[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
