export interface UninstallAppRequest {
    /**
     * 应用ID列表。
     */
    "AppIdList"?: string[];
    /**
     * 实例组ID列表。需保证所卸载的应用全部安装在实例组中。
     */
    "InstanceGroupIdList"?: string[];
}
