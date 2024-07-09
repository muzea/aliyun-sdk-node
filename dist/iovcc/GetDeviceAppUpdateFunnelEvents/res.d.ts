export interface GetDeviceAppUpdateFunnelEventsResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 升级进度事件列表信息
     */
    EventList: {
        /**
         * 应用包名
         * @example `com.aliyun.package1`
         */
        PackageName: string;
        /**
         * 云设备ID
         * @example `AS23DG23SA5D43GA34SD23GW456E`
         */
        DeviceId: string;
        /**
         * 升级目标版本versioncode
         * @example `2005680`
         */
        TargetVersionCode: string;
        /**
         * 事件名称
         * @example `os_download_succ`
         */
        Event: string;
        /**
         * 上报时间戳
         * @example `16834500000`
         */
        ReportTimestamp: number;
        /**
         * 事件上报时间
         * @example `2018-02-14 14:20:18`
         */
        ReportTime: string;
        /**
         * 项目ID
         * @example `P0VFCREU`
         */
        TenantId: string;
    }[];
}
