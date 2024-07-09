export interface QueryCarProcessEventsResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Specified access key is not found.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `8B8E77F0-7713-0139-A3D6-93482A025D45`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 车辆识别事件总数。
         * @example `50`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 返回的智能告警事件列表。
         */
        PageData: {
            /**
             * 智能告警事件照片URL地址。
             * @example `https://example.com/test.jpg`
             */
            EventPicUrl: string;
            /**
             * 事件发生的时间戳，单位为毫秒。
             * @example `1646288428361`
             */
            EventTime: number;
            /**
             * 车辆的动作类型。
             * @example `1`
             */
            ActionType: number;
            /**
             * 识别是车辆的自信度。
             * @example `63`
             */
            Confidence: number;
            /**
             * IPC设备的ProductKey。
             * @example `a1Duh0F****`
             */
            SubProductKey: string;
            /**
             * 智能告警事件ID。
             * @example `dailyb3d6658d9****`
             */
            EventId: string;
            /**
             * IPC设备的设备ID。
             * @example `ImP6ECd1aQxio9CAfWTO****`
             */
            SubIotId: string;
            /**
             * IPC设备识别检测框的数量。
             * @example `0`
             */
            AreaIndex: number;
            /**
             * 智能告警事件类型：
             * - 设置为全部智能告警事件：0。
             * - 设置为多个智能告警事件：输入智能告警事件对应的序号，并用英文逗号（,）分隔，例如：`10001,10002`。
             * >设置多个智能告警事件时，单次最多支持设置10个。
             * 请在物联网平台控制台，**产品详情**页面的**功能定义**页签，查看全部智能告警事件类型。详细信息，请参考[查看智能告警事件类型](~~207701~~)。
             * @example `10005`
             */
            EventType: number;
            /**
             * 智能告警事件照片ID。
             * @example `SU5LT2pXaUM4MV****Nzg`
             */
            EventPicId: string;
            /**
             * 车辆检测事件的任务ID。
             * @example `daily55617e7653354490938d****`
             */
            TaskId: string;
            /**
             * IPC设备的DeviceName。
             * @example `car_test`
             */
            SubDeviceName: string;
            /**
             * V系列边缘一体机的设备IotId。
             * @example `gl9kLgp0UsPSCcIM8EAY00****`
             */
            IotId: string;
            /**
             * IPC设备的DeviceNickName。
             * @example `测试车辆`
             */
            SubDeviceNickName: string;
            /**
             * 车牌号。
             * @example `浙A6****`
             */
            PlateNo: string;
        }[];
    };
}
