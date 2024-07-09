export interface FindPrepublishPassedDevicesResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 查询到的设备信息
     */
    DeviceList: {
        /**
         * 设备列表
         */
        Items: {
            /**
             * 查询时间戳
             * @example `124643600000`
             */
            GmtCreateTimestamp: number;
            /**
             * 云设备ID
             * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
             */
            DeviceId: string;
            /**
             * 查询时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
        }[];
        /**
         * 符合条件的记录总数
         * @example `2`
         */
        TotalCount: number;
    };
}
