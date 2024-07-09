export interface CreateHaVipResponse {
    /**
     * 请求ID。
     * @example `C44F62BE-9CE7-4277-B117-69243F3988BF`
     */
    RequestId: string;
    /**
     * HaVip实例的IP地址。
     * @example `192.XX.XX.10`
     */
    IpAddress: string;
    /**
     * HaVip实例的ID。
     * @example `havip-2zeo05qre24nhrqpy****`
     */
    HaVipId: string;
}
