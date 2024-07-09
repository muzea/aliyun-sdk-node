export interface ModifyEventTypeStatusRequest {
    /**
     * 请求和接收消息的语言类型。-**zh**：中文-**en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 子类型异常事件唯一标识ID，多个ID以半角逗号隔开。
     * > 开启SDDP检测子类型异常事件的功能，需要提供子类型异常事件唯一标识ID，该ID可调用**DescribeEventTypes**接口获取。
     * @example `020008`
     */
    "SubTypeIds"?: string;
    /**
     * 此参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
