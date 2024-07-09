export interface DeleteSlotRequest {
    /**
     * 数据集加速槽ID。如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `slot-my1tk3jggooi5uwks5`
     */
    "SlotId": string;
    /**
     * 是否不等待加速槽停止，强制删除。
     * @example `false`
     */
    "Force"?: boolean;
}
