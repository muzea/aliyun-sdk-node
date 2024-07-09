export interface ListTransitRouterAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `B4F480E0-4E76-5E43-9966-8322C28A158A`
     */
    RequestId: string;
    /**
     * 备可用区ID列表。
     */
    SlaveZones: string[];
    /**
     * 主可用区ID列表。
     */
    MasterZones: string[];
    /**
     * 可用区ID列表。
     */
    AvailableZones: string[];
    /**
     * 是否为支持组播功能的可用区信息。
     * @example `false`
     */
    SupportMulticast: boolean;
}
