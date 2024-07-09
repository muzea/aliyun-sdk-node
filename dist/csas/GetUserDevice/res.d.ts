export interface GetUserDeviceResponse {
    /**
     * 本次请求的ID。
     * @example `EFE7EBB2-449D-5BBB-B381-CA7839BC1649`
     */
    RequestId: string;
    /**
     * 终端设备。
     */
    Device: {
        /**
         * 终端设备ID。
         * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****`
         */
        DeviceTag: string;
        /**
         * 终端设备操作系统类型。取值：
         * - **Windows**：Windows系统。
         * - **macOS**：macOS系统。
         * - **Linux**：Linux系统。
         * - **Android**：Android系统。
         * - **iOS**：iOS系统。
         * - **Windows_Wuying**：无影云桌面系统。
         * @example `Windows`
         */
        DeviceType: string;
        /**
         * 终端设备型号。
         * @example `MacBookPro17,1`
         */
        DeviceModel: string;
        /**
         * 终端设备操作系统版本。
         * @example `3.5.1`
         */
        DeviceVersion: string;
        /**
         * 终端设备名称。
         * @example `win10-64bit`
         */
        Hostname: string;
        /**
         * 用户名。
         * @example `王先生`
         */
        Username: string;
        /**
         * 用户ID。
         * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
         */
        SaseUserId: string;
        /**
         * 用户所属部门。
         * @example `测试部`
         */
        Department: string;
        /**
         * 终端设备内网IP地址。
         * @example `172.16.XX.XX`
         */
        InnerIP: string;
        /**
         * 终端设备登录IP地址。
         * @example `106.14.XX.XX`
         */
        SrcIP: string;
        /**
         * 终端设备内存容量。单位：GB。
         * @example `16`
         */
        Memory: string;
        /**
         * 终端设备CPU型号。
         * @example `Apple M1`
         */
        CPU: string;
        /**
         * 终端设备磁盘型号。
         * @example `APPLE SSD AP0512Q Media`
         */
        Disk: string;
        /**
         * 终端设备MAC地址。
         * @example `48:9e:XX:XX:02:80`
         */
        Mac: string;
        /**
         * 客户端版本。
         * @example `2.2.0`
         */
        AppVersion: string;
        /**
         * 终端设备归属。取值：
         * - **Personal**：个人设备。
         * - **Company**：公司设备。
         * @example `Company`
         */
        DeviceBelong: string;
        /**
         * 设备是否开启共享。取值：
         * - **true**：开启共享。
         * - **false**：关闭共享。
         * @example `true`
         */
        SharingStatus: boolean;
        /**
         * 终端设备状态。取值：
         * - **Online**：在线。
         * - **Offline**：离线。
         * - **LongTermOffline**：长期离线。
         * - **Locked**：锁定。
         * - **Lost**：挂失。
         * - **Unbound**：解绑。
         * @example `Online`
         */
        DeviceStatus: string;
        /**
         * 客户端状态。取值：
         * - **Online**：在线。
         * - **Offline**：离线。
         * @example `Online`
         */
        AppStatus: string;
        /**
         * 内网访问状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * - **Unprovisioned**：未配置。
         * @example `Enabled`
         */
        PaStatus: string;
        /**
         * 互联网访问状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * - **Unprovisioned**：未配置。
         * @example `Disabled`
         */
        IaStatus: string;
        /**
         * 办公数据保护状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * - **Unprovisioned**：未配置。
         * - **Unauthorized**：未授权。
         * @example `Unauthorized`
         */
        DlpStatus: string;
        /**
         * 网络准入状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * - **Unprovisioned**：未配置。
         * @example `Unprovisioned`
         */
        NacStatus: string;
        /**
         * 终端设备注册时间。
         * @example `2023-05-16 17:18:46`
         */
        CreateTime: string;
        /**
         * 终端设备最后在线时间。
         * @example `2023-08-24 19:04:42`
         */
        UpdateTime: string;
        /**
         * 终端设备历史用户集合。
         */
        HistoryUsers: {
            /**
             * 用户名。
             * @example `张女士`
             */
            Username: string;
            /**
             * 用户ID。
             * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
             */
            SaseUserId: string;
        }[];
    };
}
