export interface ApplyCoordinationForMonitoringResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 协同流数据信息列表。
     */
    CoordinateFlowModels: {
        /**
         * 当前协同状态。
         * @example `PENDING`
         */
        CoordinateStatus: string;
        /**
         * 发起者类型。
         * @example `COORDINATOR_INITIATE_FORCE`
         */
        InitiatorType: string;
        /**
         * 用户侧用户的阿里云账号ID。
         * @example `alice`
         */
        OwnerUserId: string;
        /**
         * ASP建立连接使用的Ticket。
         * @example `1VDQ0VTUw0KW0Rlc2t0b3BdDQpHV1Rva2VuPTAwTzgwL3liS25zUEVGdkF6eU1Pc1ExeHZWdmk4VEE3NFJvU1V1d0dPYm1BNkNJWklDMHVNQklWcjU2NS80S0ZQekQ4aGFTR0ZHelZqMTFGbkRpWWgvUFF1Zm1xSXNGdFRFNFRWMExJNit3TkU0L2RMb04wNXBBSE5Tc3M4dWFXY3lwWE****`
         */
        CoordinateTicket: string;
        /**
         * 协同流ID。
         * @example `co-0sot77uale3****`
         */
        CoId: string;
        /**
         * 云桌面ID。
         * @example `ecd-96vi03f9emqnl****`
         */
        ResourceId: string;
        /**
         * 云桌面名称。
         * @example `TestDesktop`
         */
        ResourceName: string;
    }[];
}
