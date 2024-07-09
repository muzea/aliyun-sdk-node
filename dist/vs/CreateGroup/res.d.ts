export interface CreateGroupResponse {
    /**
     * 空间关联的国标Id。（仅适用于国标接入的空间）
     * @example `31000000****00000001`
     */
    GbId: string;
    /**
     * 空间关联的国标信令网关服务器地址。（仅适用于国标接入的空间）
     * @example `10.10.10.10`
     */
    GbIp: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 空间提供的国标信令服务器端口。（仅适用于国标接入的空间）
     * @example `5060`
     */
    GbPort: number;
    /**
     * 空间Id
     * @example `33763****77224964-cn-qingdao`
     */
    Id: string;
}
