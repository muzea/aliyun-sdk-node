export interface CallbackExtensionRequest {
    /**
     * 扩展程序唯一编码。
     * @example `8abcb91f-d266-4073-b907-2ed670378ed1`
     */
    "ExtensionCode": string;
    /**
     * DataWorks开放消息的消息ID。当触发扩展点事件后，您可以从接收到的事件消息中获取消息ID。
     * <props="china">消息格式，可参考[消息格式](~~215367~~)。</props>
     * @example `03400b03-b721-4c34-8727-2d6884077091`
     */
    "MessageId": string;
    /**
     * 扩展程序对本次扩展点事件的检查状态。取值如下：
     * - OK：扩展程序对本次扩展点事件检查通过。
     * - FAIL：扩展程序对本次扩展点事件检查不通过。您需要查看并及时处理报错，以免影响后续程序的正常执行。
     * - WARN：扩展程序对本次扩展点事件检查通过，但存在警告。
     * @example `FAIL`
     */
    "CheckResult": string;
    /**
     * 当CheckResult设置为FAIL，提供FAIL原因
     * @example `命中xxx规则，请修改后重试`
     */
    "CheckMessage"?: string;
}
