export interface ReleaseApplicationRequest {
    /**
     * 应用ID
     * @example `7QSXFQW46ZNGOUDM`
     */
    "ApplicationId": string;
    /**
     * 资源ID
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken"?: string;
}
