export interface DeployApplicationRequest {
    /**
     * 应用ID
     * @example `VVK605ZH00OA4MRT`
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
