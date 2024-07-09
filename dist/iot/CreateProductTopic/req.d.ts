export interface CreateProductTopicRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要创建Topic类所属产品的**ProductKey**。
     * @example `aldDEin****`
     */
    "ProductKey": string;
    /**
     * 设置Topic类的自定义类目名称。
     * Topic格式必须以`/`进行分层，区分每个类目。类目命名只能包含字母、数字和下划线（_），每级类目不能为空。
     * > **Operation**为**SUB**（订阅）时，才可以使用通配符`+`和`#`自定义Topic类，以便设备实现批量订阅Topic。通配符使用方法请参见[带通配符的自定义Topic](~~85539~~) 。
     * - 对于云网关产品，Topic类完全由用户自定义输入。支持使用`${deviceName}`通配**DeviceName**。
     * - 对于非云网关产品，自定义Topic类前三个类目已固定为`/${productKey}/${deviceName}/user/`，定义**TopicShortName**将Topic类填充完整。
     * @example `submit`
     */
    "TopicShortName": string;
    /**
     * 设备对该Topic类的操作权限，取值：
     * - **SUB**：订阅。
     * - **PUB**：发布。
     * - **ALL**：发布和订阅。
     * @example `PUB`
     */
    "Operation": string;
    /**
     * Topic类的描述信息。长度限制为100字符（一个中文汉字占一个字符）。
     * @example `submit a test topic`
     */
    "Desc"?: string;
    /**
     * **Operation**为**SUB**（订阅）或**ALL**（发布和订阅），可开启代理订阅。
     * 取值：
     * - **true**：开启。
     * - **false**：不开启。
     * 开启代理订阅后，设备与物联网平台建连时，物联网平台查询已开启代理订阅的Topic，帮助设备完成订阅。
     * @example `false`
     */
    "EnableProxySubscribe"?: boolean;
    /**
     * 尊享型企业版实例下，可开启自定义Topic数据压缩或解压缩。
     * 取值：
     * - **compress**：压缩。
     * - **decompress**：解压缩。
     * 数据压缩功能详细内容，请参见[数据压缩](~~477405~~)。
     * ><notice>**TopicShortName**传入通配符（`+`和`#`）时，不可同时传入**Codec**。如果创建通配Topic类的同时，开启了数据压缩或解压缩功能，调用本接口创建该Topic类会失败。
     * ></notice>
     * @example `compress`
     */
    "Codec"?: string;
}
