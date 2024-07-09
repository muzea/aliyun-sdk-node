export interface CreateProductRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-***-v64***`
     */
    "IotInstanceId"?: string;
    /**
     * 为新建产品命名。
     * 产品名称长度为4~30个字符，可以包含中文、英文字母、数字和下划线（_）。一个中文算2个字符。
     * ><notice> 产品名称在当前实例下需保持唯一。
     * ></notice>
     * @example `Light`
     */
    "ProductName": string;
    /**
     * 产品的节点类型，取值：
     * - **0**：设备。设备不能挂载子设备。可以直连物联网平台，也可以作为网关的子设备连接物联网平台。作为网关子设备时，必须同时传入**ProtocolType**。
     * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
     * <props="china">
     * ><notice>MQTT型实例下，设备需作为直连设备接入物联网平台，**NodeType**必须传入**0.**。
     * ></notice></props>
     * @example `0`
     */
    "NodeType": number;
    /**
     * 数据格式。可选值：
     * - **0**：透传/自定义格式（CUSTOM_FORMAT）。
     * - **1**：Alink协议（ALINK_FORMAT）。
     * <props="china">
     * ><notice>MQTT型实例下，设备通信的数据格式为原始自定义格式，**DataFormat**必须传入**0**。
     * ></notice></props>
     * @example `1`
     */
    "DataFormat"?: number;
    /**
     * 为新建产品添加描述信息。长度不超过100个字符。
     * @example `Product test`
     */
    "Description"?: string;
    /**
     * 产品版本类型。
     * - 不传入此参数：表示默认创建基础版产品，不支持使用物模型。
     * - 传入此参数：仅支持输入**iothub_senior**，表示创建使用物模型的产品。此时需要同时传入参数**DataFormat**。
     * <props="china">
     * ><notice>
     * - MQTT型实例下，不支持使用物模型，无需传入此参数。
     * - 对于基础版产品，不支持在物联网平台控制台使用**在线调试**和**事件响应**功能。
     * ></notice></props>
     * <props="intl">
     * ><notice>对于基础版产品，不支持在物联网平台控制台使用**在线调试**功能。
     * ></notice></props>
     * @example `iothub_senior`
     */
    "AliyunCommodityCode"?: string;
    /**
     * <props="china">是否使用ID²认证。可选值：</props>
     * <props="china">
     * - **true**：开通ID²认证。
     * - **false**：不开通ID²认证。
     * </props>
     * <props="china">不传入此参数，则默认为**false**，不开通ID²认证。</props>
     * <props="china">
     * > 仅华东2（上海）地域支持ID²认证方式。如果此参数值设置为**true**，但传入的**AuthType**参数值不是**id2**，系统将以**AuthType**参数值为准。</props>
     * <props="intl">无需传入。</props>
     * @example `false`
     */
    "Id2"?: boolean;
    /**
     * 设备接入网关的协议类型。
     * 使用物模型的产品（**AliyunCommodityCode**=**iothub_senior**），且产品下的设备需通过网关接入物联网平台，需传入此参数。
     * 可选值：
     * - **modbus**：Modbus协议。
     * - **opc-ua**：OPC UA协议。
     * - **customize**：自定义协议。
     * - **ble**：BLE协议。
     * - **zigbee**：ZigBee协议。
     * @example `modbus`
     */
    "ProtocolType"?: string;
    /**
     * 连网方式。
     * 产品下的设备为网关设备或直连设备时，需传入此参数。
     * 可选值：
     * <props="china">- **LORA**：LoRaWAN。</props>
     * - **WIFI**： Wi-Fi。
     * - **CELLULAR**：蜂窝网。
     * - **ETHERNET**：以太网。
     * - **OTHER**：其他。
     * 若不传入此参数，则默认为Wi-Fi。
     * <props="china">
     * ><notice>MQTT型实例下，**NetType**不支持传入**LORA**。
     * ></notice></props>
     * @example `WIFI`
     */
    "NetType"?: string;
    /**
     * <props="china">LoRaWAN入网凭证ID。连网方式**NetType**选择为**LORA**时，该参数必需。</props>
     * <props="china">请调用[QueryLoRaJoinPermissions](~~109293~~)查询您账号下的LoRaWAN入网凭证的**JoinPermissionId**。</props>
     * <props="china">如果您还没有LoRaWAN入网凭证，请访问[物联网络管理平台](https://linkwan.console.aliyun.com/join-permission-authorization)创建。</props>
     * <props="intl">无需传入。</props>
     * @example `8***`
     */
    "JoinPermissionId"?: string;
    /**
     * 资源组ID。
     * ><notice>
     * - 目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * - 历史调用本API设置的资源组仍有效。
     * ></notice>
     * @example `rg-acfmxazb4ph***`
     */
    "ResourceGroupId"?: string;
    /**
     * 产品下的设备接入物联网平台的认证方式。
     * <props="china">
     * - **secret**：使用设备密钥进行设备身份认证。更多信息，请参见[MQTT-TCP连接通信](~~73742~~)。
     * - **id2**：使用物联网设备身份认证ID²。
     *     > 仅华东2（上海）地域支持ID²认证方式。连网方式**NetType**为**LORA**的产品不支持ID²认证方式。 选择使用ID²认证，需购买ID²服务。
     *    更多信息，请参见[使用ID²认证](~~141661~~)。
     * - **one-party**：需要将设备认证信息（UserName、Password、SN）导入物联网平台，物联网平台基于设备认证信息对设备进行身份认证。
     *     > 仅MQTT型实例下，**AuthType**可以且必须传入**one-party**。
     * </props>
     * <props="china">若不传入此参数，默认值为**secret**。</props>
     * <props="intl">无需传入此参数。默认值为**secret**，表示使用设备密钥进行设备身份认证。更多信息，请参见[MQTT-TCP连接通信](~~73742~~)。</props>
     * @example `secret`
     */
    "AuthType"?: string;
    /**
     * 产品品类的标识符。如果传入此参数，创建的产品将使用指定品类的物模型；不传入，则不使用任何品类的标准物模型。
     * 调用[ListThingTemplates](~~150316~~)，从返回结果中查看物联网平台预定义的品类信息，获取CategoryKey的取值。
     * @example `Lighting`
     */
    "CategoryKey"?: string;
    /**
     * 是否在产品创建后自动发布物模型。
     * - **true**：发布。
     * - **false**：不发布。
     * 不传入此参数，取默认值为**true**。
     * @example `false`
     */
    "PublishAuto"?: boolean;
    /**
     * 数据校验级别。不传入此参数时，默认为弱校验。可取值：
     * - **1**：弱校验。只校验设备数据的idetifier和dataType字段，不校验其他字段，可流转全量数据。
     *  校验通过的数据展示在物联网平台控制台对应设备的**设备详情**页**物模型数据**页签。校验不通过的数据则不展示。
     *  通过流转数据中的参数**checkFailedData**，可查看校验不通过的数据。更多信息，请参见[数据格式](~~73736~~)。
     * - **2**：免校验。对上报的数据不进行校验，流转全量数据。
     *  数据不展示在物联网平台控制台对应设备的**设备详情**页**物模型数据**页签。
     * @example `1`
     */
    "ValidateType"?: number;
}
