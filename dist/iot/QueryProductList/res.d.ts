export interface QueryProductListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4B4ECF2C-6222-42EC-A4B5-C12202E71CEA`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的产品信息。具体信息请参见以下参数。
     */
    Data: {
        /**
         * 当前页号。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页显示的产品数。
         * @example `2`
         */
        PageSize: number;
        /**
         * 产品总数。
         * @example `184`
         */
        Total: number;
        /**
         * 总页数。
         * @example `92`
         */
        PageCount: number;
        List: {
            /**
             * 产品信息列表。
             * > 返回的产品信息按照产品创建时间倒序排列。
             */
            ProductInfo: {
                /**
                 * 产品下的设备接入物联网平台的认证方式。
                 * - **secret**：使用设备密钥进行设备身份认证。
                 * - **id2**：使用物联网设备身份认证ID²。
                 * - **x509**：使用设备X.509证书进行设备身份认证。
                 * @example `secret`
                 */
                AuthType: string;
                /**
                 * 产品的ProductKey。创建产品时，物联网平台为该产品颁发的全局唯一标识。
                 * @example `a1T27vz****`
                 */
                ProductKey: string;
                /**
                 * 产品名称。
                 * @example `路灯`
                 */
                ProductName: string;
                /**
                 * 产品描述。
                 * @example `This is a test product.`
                 */
                Description: string;
                /**
                 * 产品的节点类型。该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。取值：
                 * - **0**：设备。设备不能挂载子设备，可以直连IoT Hub，也可以作为网关的子设备连接IoT Hub。
                 * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，并且可以将拓扑关系同步到云端。
                 * @example `0`
                 */
                NodeType: number;
                /**
                 * 该产品的创建时间。毫秒值时间戳。
                 * @example `1581595942000`
                 */
                GmtCreate: number;
                /**
                 * 设备与云端之间的数据通信协议类型。该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。
                 * 取值：
                 * - **0**：透传模式。使用自定义的串口数据格式。该模式下，设备可以上报原始数据（如二进制数据流）。阿里云物联网平台会运行您配置在云端的数据解析脚本，将原始数据转换成Alink JSON标准数据格式。
                 * - **1**：Alink JSON。阿里云物联网平台定义的设备与云端的数据交换协议，采用JSON格式。
                 * @example `1`
                 */
                DataFormat: number;
                /**
                 * 产品下的设备数量。
                 * @example `128`
                 */
                DeviceCount: number;
            }[];
        };
    };
}
