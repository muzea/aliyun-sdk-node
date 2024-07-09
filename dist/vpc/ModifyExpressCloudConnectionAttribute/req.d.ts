export interface ModifyExpressCloudConnectionAttributeRequest {
    /**
     * 高速上云服务说明。
     * @example `ECC`
     */
    "Description"?: string;
    /**
     * 高速上云服务实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 高速上云服务实例名称。
     * @example `doctest`
     */
    "Name"?: string;
    /**
     * 高速上云连接实例ID。
     * @example `ecc-bp1t9osmuln*******`
     */
    "EccId": string;
    /**
     * 指智能接入网关设备上需要配置的本地BGP的AS号。
     * @example `sag-ejfge***`
     */
    "BgpAs"?: string;
    /**
     * 指智能接入网关设备和云上对接时的本地IP。
     * @example `10.10.**.**`
     */
    "PeIp"?: string;
    /**
     * 指智能接入网关设备和云上对接时的云端IP。
     * @example `172.16.**.**`
     */
    "CeIp"?: string;
}
