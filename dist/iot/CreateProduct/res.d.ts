export interface CreateProductResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 产品的**ProductKey**，物联网平台为产品颁发的唯一标识符。
     * @example `a1FlqIQ****`
     */
    ProductKey: string;
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的新建产品信息。
     */
    Data: {
        /**
         * 产品下的设备接入物联网平台的认证方式。
         * <props="china">
         * - **secret**：使用设备密钥进行设备身份认证。
         * - **id2**：使用物联网设备身份认证ID²。
         * - **one-party**：使用自定义认证信息（Username、Password、SN）认证。
         * </props>
         * @example `secret`
         */
        AuthType: string;
        /**
         * 物联网平台为新建产品颁发的全局唯一标识。
         * > 请妥善保管新建产品的**ProductKey**。在其他操作中会用到该信息。
         * @example `a1FlqIQ****`
         */
        ProductKey: string;
        /**
         * 产品的名称。
         * @example `Test`
         */
        ProductName: string;
        /**
         * 产品的节点类型，取值：
         * - **0**：设备。设备不能挂载子设备。可以直连物联网平台，也可以作为网关的子设备连接物联网平台。
         * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
         * > 此参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）特有参数。
         * @example `0`
         */
        NodeType: number;
        /**
         * 产品描述信息。
         * @example `Product test`
         */
        Description: string;
        /**
         * 是否使用ID²认证。
         * - **true**：开通ID²认证。
         * - **false**：不开通ID²认证。
         * @example `false`
         */
        Id2: boolean;
        /**
         * 产品密钥。
         * @example `U5tW7i44uilc****`
         */
        ProductSecret: string;
        /**
         * 设备接入网关协议类型。
         * > 此参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）特有参数。
         * @example `modbus`
         */
        ProtocolType: string;
        /**
         * 产品类型数据格式。
         * - **0**：透传/自定义格式（CUSTOM_FORMAT）。
         * - **1**：Alink协议（ALINK_FORMAT）。
         * > 此参数为使用物模型的产品（AliyunCommodityCode=iothub_senior）特有参数。
         * @example `1`
         */
        DataFormat: number;
        /**
         * 产品类型。
         * - **iothub_senior**：使用物模型。
         * - **iothub**：不使用物模型。
         * @example `iothub_senior`
         */
        AliyunCommodityCode: string;
    };
}
