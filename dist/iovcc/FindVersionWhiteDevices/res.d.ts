export interface FindVersionWhiteDevicesResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 设备列表信息
     */
    DeviceList: {
        /**
         * 当前分页的设备数据
         */
        Items: {
            /**
             * 创建时间戳
             * @example `1868400000`
             */
            GmtCreateTimestamp: number;
            /**
             * 源设备ID
             * @example `23452345234523452`
             */
            OriginalId: string;
            /**
             * 设备ID
             * @example `AS23DG23SA5D43GA34SD23GW456E`
             */
            DeviceId: string;
            /**
             * 设备ID类型，支持：
             * - **device_id**：硬件ID
             * - **sn**：序列号
             * - **vin**：车架号
             * - **hardware_id**：硬件ID
             * @example `hardware_id`
             */
            IdType: string;
            /**
             * 添加时间
             * @example `2018-02-14 14:20:18`
             */
            GmtCreate: string;
            /**
             * 白名单ID
             * @example `123`
             */
            Id: number;
        }[];
        /**
         * 总共符合条件的设备数
         * @example `30`
         */
        TotalCount: number;
    };
}
