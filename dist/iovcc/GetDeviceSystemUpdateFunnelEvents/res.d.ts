export interface GetDeviceSystemUpdateFunnelEventsResponse {
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
         * 云设备ID
         * @example `AS23DG23SA5D43GA34SD23GW456E`
         */
        DeviceId: string;
        /**
         * 升级的目标系统版本号
         * @example `2.0.1-R-20180412.0824`
         */
        TargetVersion: string;
        /**
         * 事件名称
         * @example `os_download_succ`
         */
        Event: string;
        /**
         * 上报时间戳
         * @example `167845600000`
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
