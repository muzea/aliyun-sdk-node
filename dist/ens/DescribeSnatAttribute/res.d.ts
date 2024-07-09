export interface DescribeSnatAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * NAT网关的ID。
     * @example `nat-5t7nh1cfm6kxiszlttr38****`
     */
    NatGatewayId: string;
    /**
     * SNAT条目的ID。
     * @example `snat-5tfi6f8gds82mjmlofeym****`
     */
    SnatEntryId: string;
    /**
     * SNAT条目中的EIP，多个EIP之间用半角逗号（,）隔开。
     * @example `120. XXX. XXX.71`
     */
    SnatIp: string;
    /**
     * SNAT条目的源网段。
     * @example `10. XXX. XXX.0/24`
     */
    SourceCIDR: string;
    /**
     * SNAT条目的名称。
     * @example `test0`
     */
    SnatEntryName: string;
    /**
     * SNAT条目状态。
     * - Pending：配置中，可能是创建中或修改中。
     * - Available：可用。
     * - Deleting：删除中。
     * @example `Available`
     */
    Status: string;
    /**
     * 创建时间，UTC时间。
     * @example `2020-04-26T15:38:27Z`
     */
    CreationTime: string;
    /**
     * SNAT中公网IP信息。
     */
    SnatIps: {
        /**
         * IP地址。
         * @example `203. XXX. XXX.139`
         */
        Ip: string;
        /**
         * SNAT IP的状态。
         * - Running：已启用。
         * - Stopping：停用中。
         * - Stopped：已停用。
         * - Starting：启动中。
         * - Releasing：释放中。
         * @example `Running`
         */
        Status: string;
        /**
         * 创建时间，UTC时间。
         * @example `2020-04-26T15:38:27Z`
         */
        CreationTime: string;
    }[];
    /**
     * SNAT条目中的备用EIP，多个备用EIP之间用半角逗号（,）隔开。
     * @example `101. XXX. XXX.4`
     */
    StandbySnatIp: string;
    /**
     * 备用EIP状态。
     * - Running：开启。
     * - Stopping：关闭中。
     * - Stopped：关闭。
     * - Starting：启动中。
     * @example `Stopped`
     */
    StandbyStatus: string;
    /**
     * NAT类型。
     * - 返回为空值，表示对称型NAT。
     * - FullCone：全锥形NAT
     * @example `FullCone`
     */
    Type: string;
    /**
     * 超时时间，单位：秒。
     * @example `10`
     */
    IdleTimeout: number;
    /**
     * 目标网段，表示只有访问目标网段的请求走该规则。
     * @example `101. XXX. XXX.0/24`
     */
    DestCIDR: string;
}
