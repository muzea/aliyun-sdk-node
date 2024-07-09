export interface CreateDeviceDistributeJobRequest {
    /**
     * 待分发的设备名称列表。最多包含1000个设备名称。
     * @example `RepeatList`
     */
    "DeviceName": string[];
    /**
     * 目标实例配置列表。
     */
    "TargetInstanceConfig": {
        /**
         * 设备分发的目标实例配置。实例ID详情，请参见参数**SourceInstanceId**描述。
         * - 当参数**Strategy**为**1**时，此处可传入多个实例ID。
         * - 当参数**Strategy**为**0**时，此处传入一个实例ID。
         * @example `iot-cn-6ja***`
         */
        TargetInstanceId: string;
    }[];
    /**
     * 设备所属的源实例ID。
     * - 各地域公共实例ID：
     *     - 华东2（上海）：iotx-oxssharez200。
     *     - 日本：iotx-oxssharez300。
     *     - 新加坡：iotx-oxssharez400。
     *     - 美国（硅谷）：iotx-oxssharez500。
     *     - 美国（弗吉尼亚）：iotx-oxssharez600。
     *     - 德国（法兰克福）：iotx-oxssharez700。
     * - 企业版实例ID：
     *
     *     1. 登录物联网平台控制台，从顶部导航栏左上方的下拉菜单选择地域。
     *
     *     2. 在**实例概览**页面，单击实例名称，在**实例详情**页面的**实例基本信息**中查看**实例ID**。
     * @example `iot-060***`
     */
    "SourceInstanceId": string;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 设备所属的阿里云账号ID。可登录物联网平台控制台，单击账号头像，跳转至**安全设置**页面查看。
     * **TargetUid**与**TargetAliyunId**参数至少传入一个。
     * @example `198***`
     */
    "TargetUid"?: string;
    /**
     * 设备所属的阿里云账号。可登录物联网平台控制台，单击账号头像，跳转至**安全设置**页面查看。
     * **TargetUid**与**TargetAliyunId**参数至少传入一个。
     * @example ` io****@example.com`
     */
    "TargetAliyunId"?: string;
    /**
     * 分发策略。默认值为0。
     * - **0**：指定地域，将设备分发到指定地域的一个实例中。
     * - **1**：就近接入，配置多个地域的实例ID，设备将根据设备的IP位置动态接入其中距离最近的地域。
     * @example `0`
     */
    "Strategy": number;
}
