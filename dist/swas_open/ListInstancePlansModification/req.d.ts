export interface ListInstancePlansModificationRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询轻量应用服务器的可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
}
