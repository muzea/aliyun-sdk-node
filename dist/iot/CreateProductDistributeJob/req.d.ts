export interface CreateProductDistributeJobRequest {
    /**
     * 产品所属的源实例ID。
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
     *
     * @example `iot-cn-st2***`
     */
    "SourceInstanceId": string;
    /**
     * 待分发产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 产品分发的目标实例ID。实例ID详情，请参见参数**SourceInstanceId**描述。
     * @example `iot-cn-6ja***`
     */
    "TargetInstanceId": string;
    /**
     * 产品所属的阿里云账号ID。可登录物联网平台控制台，单击账号头像，跳转至**基本信息**页面查看**账号ID**。
     * **TargetUid**与**TargetAliyunId**参数至少传入一个。
     * @example `198***`
     */
    "TargetUid"?: string;
    /**
     * 产品所属的阿里云账号。可登录物联网平台控制台，单击账号头像，跳转至**基本信息**页面查看**登录账号**。
     * **TargetUid**与**TargetAliyunId**参数至少传入一个。
     * @example ` io****@example.com`
     */
    "TargetAliyunId"?: string;
}
