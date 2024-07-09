export interface ListNodeInfosForPodResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 可用区ID
         * @example `cn-wulanchabu-b`
         */
        ZoneId: string;
        /**
         * 集群ID
         * @example `cluster-****`
         */
        ClusterId: string;
        /**
         * 本节点所属的专有网络ID
         * @example `vpc-j6ctp4n75306****`
         */
        VpcId: string;
        /**
         * 本次操作的节点ID
         * @example `node-be70****`
         */
        NodeId: string;
        /**
         * 本节点可申请IP的VSwitch列表
         */
        VSwitches: string[];
        /**
         * 灵骏弹性网卡配额，不包含系统类型
         * @example `10`
         */
        LeniQuota: number;
        /**
         * 灵骏网卡辅助私网IP配额
         * @example `10`
         */
        LniSipQuota: number;
        /**
         * 灵骏弹性网卡辅助私网IP配额
         * @example `10`
         */
        LeniSipQuota: number;
        /**
         * 灵骏高密网卡配额
         * @example `10`
         */
        HdeniQuota: number;
    }[];
}
