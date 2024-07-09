export interface UpdateIDEEventResultRequest {
    /**
     * DataWorks开放消息的消息ID。当触发扩展点事件后，您可以从接收到的事件消息中获取消息ID。
     * <props="china">消息格式，可参考[消息格式](~~215367~~)。</props>
     * @example `8abcb91f-d266-4073-b907-2ed670378ed1`
     */
    "MessageId"?: string;
    /**
     * 扩展程序的唯一标识。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入开放平台的Extensions页签查看标识。
     * @example `8abcb91f-d266-4073-b907-2ed670378ed1`
     */
    "ExtensionCode"?: string;
    /**
     * 扩展程序对本次扩展点事件的检查状态。取值如下：
     * - OK：扩展程序对本次扩展点事件检查通过。
     * - FAIL：扩展程序对本次扩展点事件检查不通过。您需要查看并及时处理报错，以免影响后续程序的正常执行。
     * - WARN：扩展程序对本次扩展点事件检查通过，但存在警告。
     * @example `OK`
     */
    "CheckResult"?: string;
    /**
     * 扩展程序对本次扩展点事件进行检查的摘要信息。该信息会显示在您当前的开发页面上，当本次检查存在警告或者检查不通过时，您可以通过该摘要信息快速定位原因。
     * @example `Succeeded`
     */
    "CheckResultTip"?: string;
}
