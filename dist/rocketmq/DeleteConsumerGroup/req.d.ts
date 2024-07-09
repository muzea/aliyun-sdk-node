export interface DeleteConsumerGroupRequest {
    /**
     * 待删除的消费者分组所属的实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 待删除的消费者分组的ID。
     * @example `CID-TEST`
     */
    "consumerGroupId": string;
}
