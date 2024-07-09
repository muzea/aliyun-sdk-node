export interface GetCardDetailRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的**卡管理页面**查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 是否展示子卡的详情信息，默认为否。
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "ShowPsim"?: boolean;
    /**
     * 物联网卡的实例ID。
     * 只有查询的物联网卡已销户时（即**DestroyCard**为**true**）需要填入该参数。
     * 您可以调用接口[ListCardInfo](~~425529~~)在返回参数中查看物联网卡的实例ID（VsimInstanceId）。
     * @example `411****`
     */
    "InstanceId"?: string;
    /**
     * 查询的物联网卡是否已销户，默认为否。
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "DestroyCard"?: boolean;
}
