export interface ListSoftwareForUserDeviceResponse {
    /**
     * 本次请求的ID。
     * @example `102350E7-1A20-58F5-9D63-ABEA820AE6E1`
     */
    RequestId: string;
    /**
     * 终端设备安装的软件总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 终端设备安装的软件列表。
     */
    Software: {
        /**
         * 软件名称。
         * @example `钉钉`
         */
        Name: string;
        /**
         * 软件出品公司。
         * @example `Alibaba (China) Network Technology Co.,Ltd.`
         */
        Inc: string;
        /**
         * 软件版本集合。
         */
        Versions: string[];
        /**
         * 软件安装时间。
         * @example `2023-08-18 02:43:02`
         */
        InstallTime: string;
    }[];
}
