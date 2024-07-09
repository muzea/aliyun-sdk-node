export interface ListDistributedProductRequest {
    /**
     * 每页显示的产品数量。最大不超过200条。
     * @example `5`
     */
    "PageSize": number;
    /**
     * 产品所属的源实例ID。
     * - 各地域公共实例ID：
     *     - 华东2（上海）：iotx-oxssharez200。
     *     - 日本：iotx-oxssharez300。
     *     - 新加坡：iotx-oxssharez400。
     *     - 美国（硅谷）：iotx-oxssharez500。
     *     - 美国（弗吉尼亚）：iotx-oxssharez600。
     *     - 德国（法兰克福）：iotx-oxssharez700。
     * - 查看企业版实例ID的步骤：
     *
     *     1. 登录[物联网平台控制台](https://iot.console.aliyun.com/)，从顶部导航栏左上方的下拉菜单选择地域。
     *
     *     2. 在**实例概览**页面，找到目标实例，查看**ID**。
     * @example `iot-060***`
     */
    "SourceInstanceId"?: string;
    /**
     * 产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 产品分发的目标实例ID。实例ID详情，请参见参数**SourceInstanceId**描述。
     * @example `iot-cn-6ja***`
     */
    "TargetInstanceId"?: string;
    /**
     * 产品所属的阿里云账号ID。可登录物联网平台控制台，单击账号头像，跳转至**基本信息**页面查看**账号ID**。
     * @example `198***`
     */
    "TargetUid"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * @example `1`
     */
    "CurrentPage": number;
}
