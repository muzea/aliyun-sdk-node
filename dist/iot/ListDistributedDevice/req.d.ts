export interface ListDistributedDeviceRequest {
    /**
     * 每页显示的设备数量。最大不超过200条。
     * @example `5`
     */
    "PageSize": number;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * @example `mydevice`
     */
    "DeviceName"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 阿里云账号ID。可登录物联网平台控制台，单击账号头像，跳转至**基本信息**页面查看**账号ID**。
     * @example `198***`
     */
    "TargetUid"?: string;
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
    "SourceInstanceId"?: string;
}
