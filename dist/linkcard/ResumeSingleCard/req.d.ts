export interface ResumeSingleCardRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 是否对子卡进行操作，填入子卡的MSISDN。
     * - 普通单网卡无需传入此参数。
     * - 虚拟运营商：
     *     - 如果传入该参数，则对指定的子卡进行操作。
     *     - 如果不传入该参数，则对所有子卡进行操作。
     * @example `["111******6826","11*******6827"]`
     */
    "OptMsisdns"?: string[];
}
