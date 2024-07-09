export interface GetCardRealStatusRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在物联网SIM服务控制台的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid"?: string;
    /**
     * 物联网卡的MSISDN。
     * @example `144******1111`
     */
    "Msisdn"?: string;
    /**
     * 轮询查询结果的唯一标识。
     */
    "SerialNo"?: string[];
}
