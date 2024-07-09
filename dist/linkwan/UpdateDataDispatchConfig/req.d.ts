export interface UpdateDataDispatchConfigRequest {
    /**
     * 要更新的节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
    /**
     * 数据流转目的地。取值：
     * - **IOT**：数据流转到IoT的产品。
     * - **ONS**：数据流转到MQ的Topic。
     * @example `IOT`
     */
    "DataDispatchDestination": string;
    /**
     * 数据流转目的地为IoT的产品类型。取值：
     * - **IOT_SUITE**：数据流转到 IoT 套件基础版。
     * - **IOT_SUITE_SENIOR**：数据流转到 IoT 套件高级版。
     * 数据流转目的地为IoT时，请求参数必填。
     * @example `IOT_SUITE`
     */
    "ProductType"?: string;
    /**
     * 数据流转目的地为IoT的产品名称。
     * 数据流转目的地为IoT时，请求参数必填。
     * @example `产品1`
     */
    "ProductName"?: string;
    /**
     * 数据流转目的地为IoT的Product Key。
     * 数据流转目的地为IoT时，请求参数必填。
     * @example `xxxxxxxx`
     */
    "ProductKey"?: string;
    /**
     * 数据流转目的地为 IoT 的调试开关。
     * 调试开关主要针对物联网平台自定义Topic，针对物联网络管理控制台，请勿修改自定义topic。
     * 自定义Topic如下：
     * /ProductKey/${deviceName}/user/update
     * /ProductKey/${deviceName}/user/get
     * @example `false`
     */
    "DebugSwitch"?: boolean;
    /**
     * 数据流转目的地为MQ的上行Region Id。
     * @example `cn-beijing`
     */
    "UplinkRegionName"?: string;
    /**
     * 数据流转目的地为MQ的上行Topic。
     * @example `cn-shanghai`
     */
    "UplinkTopic"?: string;
}
