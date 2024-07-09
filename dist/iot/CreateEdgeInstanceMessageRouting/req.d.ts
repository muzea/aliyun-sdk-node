export interface CreateEdgeInstanceMessageRoutingRequest {
    /**
     * 物联网平台的实例ID：
     * - 企业版实例：必须传入此参数。您可在[物联网平台控制台](http://iot.console.aliyun.com/)的**实例概览**页面，查看您的企业版实例ID。
     * - 公共实例：无需传入此参数。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标指针悬浮在目标边缘实例名称上获取ID。
     * @example `nF9oXo7kLRWQ********`
     */
    "InstanceId": string;
    /**
     * 消息路由名称。长度限制为4~32个字符，汉字和全角符号算2个字符。
     * @example `le_lite2`
     */
    "Name"?: string;
    /**
     * 消息过滤条件，取值如下：
     * - 具体消息Topic：表示来自消息源，且符合该消息Topic的消息，会被传给消息接收者。Topic相关信息，请参见[什么是Topic](~~73731~~)。
     * - **all**：表示来自消息源的所有消息，都会被传给消息接收者。
     * @example `all`
     */
    "TopicFilter"?: string;
    /**
     * 消息来源，取值如下：
     * - **device**：表示消息由设备发出。
     * - **function**：表示消息由边缘应用发出。
     * - **IotHub**：表示消息由云端发出。
     * @example `device`
     */
    "SourceType": string;
    /**
     * 消息来源的数据，取值分如下几种情况：
     * - **SourceType**取值为**device**时：
     *     - 如果由指定产品下的指定设备发送消息，则此处取值格式为`/{Your_ProductKey}/{Your_DeviceName}`。
     *         > 请将{Your_ProductKey}和{Your_DeviceName}替换为您实际设备的ProductKey和DeviceName。
     *     - 如果由指定产品下的所有设备发送消息，则此处取值格式为`/{Your_ProductKey}/+`。
     *         > 请将{Your_ProductKey}替换为您实际设备的ProductKey。
     *     - 如果由边缘实例中所有产品下的所有设备发送消息，则此处取值为`#`。
     * - **SourceType**取值为**function**：此处取值为边缘应用的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**应用管理**页面中，鼠标指针悬浮在目标应用名称上获取ID。
     * -  **SourceType**取值为**IotHub**时：无需传入此参数。
     * @example `#`
     */
    "SourceData"?: string;
    /**
     * 消息接收者，取值分如下几种情况：
     * - **SourceType**取值为**device**时：该参数可取的值为**function**或**IotHub**，表示由设备发出的消息，传给边缘应用或云端。
     * - **SourceType**取值为**function**时：该参数可取的值为**function**或**IotHub**，表示由边缘应用发出的消息，传给另一个边缘应用或云端。
     * - **SourceType**取值为**IotHub**时：该参数可取的值为**function**，表示由云端发出的消息，传给边缘应用。
     * @example `function`
     */
    "TargetType": string;
    /**
     * 消息接收者的数据，取值分如下几种情况：
     * - **TargetType**取值为**function**时：此处取值为边缘应用的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**应用管理**页面中，鼠标指针悬浮在目标应用名称上获取ID。
     * - **TargetType**取值为**IotHub**时：无需传入此参数。
     * @example `58c46749ac934db3925fe5********`
     */
    "TargetData"?: string;
    /**
     * 服务级别。取值如下：
     * - **0**：表示消息仅发送一次，不管是否被消息接收者成功接收。
     * - **1**：表示最少发送一次消息，直至收到消息接收者的返回信息，则停止发送该消息。
     * > 当**TargetType**为**IoTHub**时，必须传入此参数。
     * @example `0`
     */
    "TargetIotHubQos"?: number;
}
