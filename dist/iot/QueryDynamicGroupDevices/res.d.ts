export interface QueryDynamicGroupDevicesResponse {
    /**
     * 下一页标识。可在下次请求时传入，来获取下一页数据。
     * 如果返回值为空，则表示没有下一页数据。
     * @example `TGlzdFJlc291***`
     */
    NextToken: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页所显示的设备数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 设备总数。
     * @example `24`
     */
    Total: number;
    /**
     * 总页数。
     * @example `2`
     */
    PageCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功后，返回的设备列表，详情参见**SimpleDeviceInfo**下信息。
         */
        SimpleDeviceInfo: {
            /**
             * 设备状态。取值：
             * - **ONLINE**：设备在线。
             * - **OFFLINE**：设备离线。
             * - **UNACTIVE**：设备未激活。
             * - **DISABLE**：设备已禁用。
             * @example `ONLINE`
             */
            Status: string;
            /**
             * 设备所属产品的名称。
             * @example `test`
             */
            ProductName: string;
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备的激活时间，UTC格式。
             * @example `2018-08-06T02:48:41.000Z`
             */
            UtcActiveTime: string;
            /**
             * 设备的激活时间。
             * @example `2018-08-06 10:48:41`
             */
            ActiveTime: string;
            /**
             * 设备所属产品的**ProductKey**。
             * @example `a1rYuVF***`
             */
            ProductKey: string;
            /**
             * 设备最近一次上线时间。
             * @example `2018-08-06 13:43:12`
             */
            LastOnlineTime: string;
            /**
             * 产品的节点类型。取值：
             * - **0**：设备。设备不能挂载子设备，可以直连物联网平台，也可以作为网关的子设备连接物联网平台。
             * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
             * @example `0`
             */
            NodeType: number;
            /**
             * 设备最近一次上线的时间，UTC格式。
             * @example `2018-08-06T05:43:12.000Z`
             */
            UtcLastOnlineTime: string;
            /**
             * 设备的备注名称。
             * @example `detectors_in_beijing`
             */
            Nickname: string;
            /**
             * 产品所属品类的标识符。
             * 产品使用了物联网平台预定义的标准品类物模型会返回此参数。
             * @example `Lighting`
             */
            CategoryKey: string;
            /**
             * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
             * @example `Q7uOhVRdZRRlDnTLv****00100`
             */
            IotId: string;
        }[];
    };
}
