export interface DescribeSnatTableEntriesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询的SNAT列表条目数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询的SNAT列表详细信息。
     */
    SnatTableEntries: {
        /**
         * NAT网关实例的ID。
         * @example `nat-5t7nh1cfm6kxiszlttr38****`
         */
        NatGatewayId: string;
        /**
         * SNAT条目的ID。
         * @example `snat-5tfjp3537mi6iokl59g5c****`
         */
        SnatEntryId: string;
        /**
         * SNAT条目中的EIP地址。
         * @example `120.XXX.XXX.71`
         */
        SnatIp: string;
        /**
         * SNAT条目的源网段。
         * @example `10.0.0.13/32`
         */
        SourceCIDR: string;
        /**
         * SNAT条目的名称。
         * @example `test0`
         */
        SnatEntryName: string;
        /**
         * SNAT条目状态，取值：
         * - Pending：配置中，可能是创建中或修改中。
         * - Available：可用。
         * - Deleting：删除中。
         * @example `Available`
         */
        Status: string;
        /**
         * 备用EIP，多个EIP之间用半角逗号（,）隔开。
         * @example `101.XXX.XXX.7`
         */
        StandbySnatIp: string;
        /**
         * 备用弹性公网IP的状态
         * - Running：开启
         * - Stopping：关闭中
         * - Stopped：关闭
         * - Starting：启动中
         * @example `Stopped`
         */
        StandbyStatus: string;
    }[];
}
