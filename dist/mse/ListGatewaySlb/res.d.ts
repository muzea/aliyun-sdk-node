export interface ListGatewaySlbResponse {
    /**
     * 请求ID。
     * @example `EAB345F4-3AC3-560C-B653-65717703****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * ID
         * @example `ID`
         */
        Id: string;
        /**
         * SLB ID
         * @example `lb-bp1kmnli3hdpreptw2ah3`
         */
        SlbId: string;
        /**
         * SLB IP
         * @example `121.199.XX.XX`
         */
        SlbIp: string;
        /**
         * SLB端口。
         * @example `80,443`
         */
        SlbPort: string;
        /**
         * 网络类型
         * - PUB_NET：公网
         * - PRIVATE_NET：私网
         * @example `PUB_NET`
         */
        Type: string;
        /**
         * 网关ID。
         * @example `1`
         */
        GatewayId: string;
        /**
         * 创建时间。
         * @example `2022-01-14 14:39:16`
         */
        GmtCreate: string;
        /**
         * 来源。
         * @example `UserSelect`
         */
        GatewaySlbMode: string;
        /**
         * 关联状态。
         * @example `Ready`
         */
        GatewaySlbStatus: string;
        /**
         * 状态备注。
         * @example `关联中`
         */
        StatusDesc: string;
        /**
         * http虚拟服务组ID。
         * @example `353`
         */
        VServerGroupId: string;
        /**
         * HTTP端口（虚拟服务组）。
         * @example `80`
         */
        HttpPort: number;
        /**
         * HTTPS端口（虚拟服务组）。
         * @example `443`
         */
        HttpsPort: number;
        /**
         * 服务权重。
         * @example `80`
         */
        ServiceWeight: number;
        /**
         * 是否可编辑。
         * @example `false`
         */
        EditEnable: boolean;
        /**
         * https虚拟服务组ID。
         * @example `353`
         */
        HttpsVServerGroupId: string;
        /**
         * 虚拟服务器组元信息。
         * @example `[{"protocol":"HTTP","vServerGroupName":"k8s/80/****","port":80,"vServerGroupId":"rsp-bp***"},{"protocol":"HTTPS","vServerGroupName":"k8s/443/***","port":443,"vServerGroupId":"rsp-bp*****"}]`
         */
        VsMetaInfo: string;
        /**
         * SLB监听信息。
         */
        VServiceList: {
            /**
             * 端口。
             * @example `443`
             */
            Port: string;
            /**
             * 协议类型。
             * - HTTPS
             * - HTTP
             * @example `HTTPS`
             */
            Protocol: string;
            /**
             * 虚拟服务器组ID。
             * @example `rsp-bp183l2x70***`
             */
            VServerGroupId: string;
            /**
             *  虚拟服务器组名称。
             * @example `k8s/31**0/***​/istio-system/clusterid`
             */
            VServerGroupName: string;
        }[];
        SlbType: string;
    }[];
}
