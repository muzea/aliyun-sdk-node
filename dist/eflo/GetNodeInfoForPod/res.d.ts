export interface GetNodeInfoForPodResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `9C50C9CD-E799-54DA-BA7A-1FAF3DF80857`
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
         * @example `node-be70****
        `
         */
        NodeId: string;
        /**
         * 本节点可以申请IP的VSwitch列表
         */
        VSwitches: string[];
        /**
         * 灵骏弹性网卡配额，包含系统类型
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
         */
        LeniSipQuota: number;
        /**
         * 灵骏高密网卡配额
         */
        HdeniQuota: number;
    };
}
