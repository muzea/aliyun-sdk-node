export interface ForceActivationRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 套餐类型。
     * - **sameflowcard**：同档位通用流量套餐。
     * - **directional_sameflowcard**：同档位定向流量套餐。
     * @example `sameflowcard`
     */
    "DateType"?: string;
}
