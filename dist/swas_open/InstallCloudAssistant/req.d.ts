export interface InstallCloudAssistantRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器实例ID。
     */
    "InstanceIds": string[];
}
