export interface BindEndpointRequest {
    /**
     * 数据集加速槽挂载点ID。如何获取挂载点ID，请参见[ListEndpoints](~~467913~~)。
     * @example `end-my1tk3jggooi5uwks5`
     */
    "EndpointId": string;
    /**
     * 数据集加速槽ID。如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `slot-my1tk3jggooi5uwks5`
     */
    "SlotId": string;
}
