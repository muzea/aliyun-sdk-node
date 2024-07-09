export interface SetCardStopRuleRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 达量停用的数值，仅支持正整数，单位：MB。
     * 当月流量达到此数值时将自动停用，可主动复用。
     * @example `100`
     */
    "FlowLimit": number;
    /**
     * 达量停用后，次月是否自动复用。
     * - true（默认值）：次月自动复用。
     * - false：次月不自动复用。
     * @example `true`
     */
    "AutoRestore": boolean;
}
