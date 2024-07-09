export interface ValidateApplicationRequest {
    /**
     * 应用ID
     * @example `02S7UU41WKJL7ERR`
     */
    "ApplicationId": string;
    /**
     * 资源组ID
     * @example `rg-acfmyjt3c5om3hi`
     */
    "ResourceGroupId"?: string;
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken"?: string;
}
