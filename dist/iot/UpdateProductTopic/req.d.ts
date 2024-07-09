export interface UpdateProductTopicRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * Topic类的描述信息。长度限制为100字符（一个汉字占一个字符）。
     * @example `resubmit a test topic`
     */
    "Desc"?: string;
    /**
     * 设备对该Topic类的操作权限，取值：
     * - **SUB**：订阅。
     * - **PUB**：发布。
     * - **ALL**：发布和订阅。
     * @example `PUB`
     */
    "Operation": string;
    /**
     * 设置Topic类的自定义类目名称。Topic类默认包含_productKey_和_deviceName_两级类目，类目间以正斜线（/）分隔，其格式为：`productKey/deviceName/topicShortName`。
     * > 每级类目的名称只能包含字母、数字和下划线（_），且不能为空。
     * @example `resubmit`
     */
    "TopicShortName": string;
    /**
     * 要修改的Topic类的ID。
     * 调用[CreateProductTopic](~~69649~~)接口创建自定义Topic类成功后，返回的**TopicId**。
     * @example `821****`
     */
    "TopicId": string;
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
     * 标准型和尊享型企业版实例下，可开启自定义Topic数据压缩或解压缩。
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
