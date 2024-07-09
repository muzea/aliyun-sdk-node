export interface QueryProductResponse {
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
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
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
     * 调用成功时，返回的产品信息详情。
     */
    Data: {
        /**
         * 调用者是否是产品的拥有者。
         * - **true**：是。
         * - **false**：不是。
         * @example `true`
         */
        Owner: boolean;
        /**
         * 产品名称。
         * @example `路灯`
         */
        ProductName: string;
        /**
         * 产品密钥。
         * @example `U5tW7i44uilc****`
         */
        ProductSecret: string;
        /**
         * 设备与云端之间的数据通信协议类型。该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。
         * 取值：
         * - **0**：透传模式。使用自定义的串口数据格式。该模式下，设备可以上报原始数据（如二进制数据流）。阿里云物联网平台会运行您配置在云端的数据解析脚本，将原始数据转换成Alink JSON标准数据格式。
         * - **1**：Alink JSON。阿里云物联网平台定义的设备与云端的数据交换协议，采用 JSON 格式。
         * @example `1`
         */
        DataFormat: number;
        /**
         * 产品所属品类的名称。
         * 产品使用了物联网平台预定义的标准品类物模型会返回此参数。
         * 该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。
         * @example `路灯照明`
         */
        CategoryName: string;
        /**
         * 产品的状态。
         * - **DEVELOPMENT_STATUS**：开发中。
         * - **RELEASE_STATUS**：产品已发布。
         * @example `DEVELOPMENT_STATUS`
         */
        ProductStatus: string;
        /**
         * 产品类型，决定是否使用物模型功能。
         * 取值：
         * - **iothub_senior**：使用物模型。
         * - **iothub**：不使用物模型。
         * @example `iothub_senior`
         */
        AliyunCommodityCode: string;
        /**
         * 该产品下的设备数量。
         * @example `0`
         */
        DeviceCount: number;
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
         * 产品的节点类型。该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。取值：
         * - **0**：设备。设备不能挂载子设备，可以直连IoT Hub，也可以作为网关的子设备连接IoT Hub。
         * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，并且可以将拓扑关系同步到云端。
         * @example `0`
         */
        NodeType: number;
        /**
         * 产品描述。
         * @example `智能路灯`
         */
        Description: string;
        /**
         * 数据校验级别。可取值：
         * - **2**：免校验。对上报的数据不进行校验，流转全量数据。
         *     数据不展示在物联网平台控制台对应设备的设备详情页物模型数据页签。
         * - **1**：弱校验。只校验设备数据的idetifier和dataType字段，不校验其他字段，流转全量数据。
         * - **0**：强校验。校验所有字段，仅流转校验通过的数据。
         *
         * 对于2020年10月14日之前（不含当日）创建的产品，仅支持强校验。
         * 对于2020年10月14日（含当日）之后创建的产品，支持弱校验和免校验。
         * 强校验和弱校验后：
         * - 校验通过的数据展示在物联网平台控制台对应设备的**设备详情**页**物模型数据**页签。校验不通过的数据则不展示。
         * - 通过流转数据中的参数**checkFailedData**，可查看校验不通过的数据，请参见[数据格式](~~73736~~)。
         * @example `1`
         */
        ValidateType: number;
        /**
         * 该产品是否使用ID²认证。取值：
         * - **true**：使用ID²认证。
         * - **false**：不使用ID²认证。
         * @example `false`
         */
        Id2: boolean;
        /**
         * 产品下设备的联网方式。取值：
         * - **3**：Wi-Fi。
         * - **6**：Cellular（2G/3G/4G/5G）蜂窝网。
         * - **7**：Ethernet以太网。
         * - **8**：其他。
         * @example `3`
         */
        NetType: number;
        /**
         * 该产品的创建时间。毫秒级时间戳。
         * @example `1581595942000`
         */
        GmtCreate: number;
        /**
         * 子设备接入网关的协议类型。
         * 此参数为使用物模型的产品（AliyunCommodityCode=iothub_senior），且产品节点类型为要接入网关的设备的特有参数。取值：
         * - **modbus**：Modbus协议。
         * - **opc-ua**：OPC UA协议。
         * - **customize**：自定义协议。
         * - **ble**：BLE协议。
         * - **zigbee**：ZigBee协议。
         * @example `modbus`
         */
        ProtocolType: string;
        /**
         * 产品所属品类的标识符。
         * 产品使用了物联网平台预定义的标准品类物模型会返回此参数。
         * 该参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）的特有参数。
         * @example `Lighting`
         */
        CategoryKey: string;
    };
}
