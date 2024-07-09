export interface CreateNatGatewayResponse {
    /**
     * 创建的NAT网关的实例ID。
     * @example `ngw-112za33e4****`
     */
    NatGatewayId: string;
    /**
     * 请求ID。
     * @example `2315DEB7-5E92-423A-91F7-4C1EC9AD97C3`
     */
    RequestId: string;
    ForwardTableIds: {
        /**
         * DNAT列表。
         */
        ForwardTableId: string[];
    };
    SnatTableIds: {
        /**
         * SNAT列表。
         */
        SnatTableId: string[];
    };
    FullNatTableIds: {
        /**
         * FULLNAT列表。
         */
        FullNatTableId: string[];
    };
}
