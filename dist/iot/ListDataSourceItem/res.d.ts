export interface ListDataSourceItemResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
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
     * 返回结果中每页显示的记录数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果记录总数。
     * @example `100`
     */
    Total: number;
    /**
     * 显示返回结果中的第几页。
     * @example `1`
     */
    Page: number;
    DataSourceItems: {
        /**
         * 返回的Topic列表信息。
         */
        dataSourceItem: {
            /**
             * 消息Topic所属产品的**ProductKey**。
             * > 消息Topic属于开源MQTT托管形态产品和设备，或MQTT云网关产品和设备时，返回该参数。
             * @example `aw3****`
             */
            ProductKey: string;
            /**
             * 数据源Topic的ID。
             * @example `129322`
             */
            DataSourceItemId: number;
            /**
             * 消息Topic所属的设备名称。
             * > 消息Topic属于开源MQTT托管形态产品和设备或MQTT云网关产品和设备时，返回该参数。
             * @example `lightDevice`
             */
            DeviceName: string;
            /**
             * 消息Topic订阅的作用域，可取值：
             * - **PRODUCT **：产品维度，表示作用在产品下的所有设备上。
             * - **DEVICE **：设备维度，表示作用在产品下指定的设备上。
             * > 消息Topic属于开源MQTT托管形态产品和设备，或MQTT云网关产品和设备时，返回该参数。
             * @example `PRODUCT`
             */
            ScopeType: string;
            /**
             * 数据源Topic的具体值。
             * @example `/gyh***z/+/thing/event/property/post`
             */
            Topic: string;
        }[];
    };
}
