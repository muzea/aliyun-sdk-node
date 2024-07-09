export interface DeleteTagRequest {
    /**
     * 标签所属的资源的类型，取值如下：
     * - Instance：数据集加速实例。
     * - Slot：数据集加速槽。
     * @example `Instance`
     */
    "ResourceType": string;
    /**
     * 标签所属的资源的ID。
     * - 当ResourceType为Instance时，需要配置为数据集加速实例ID，如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
     * - 当ResourceType为Slot时，需要配置为数据集加速槽ID，如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `inst-my1tk3jggooi5uwks`
     */
    "ResourceId": string;
    /**
     * 标签的键值。
     * @example `dataset_version`
     */
    "Key": string;
}
