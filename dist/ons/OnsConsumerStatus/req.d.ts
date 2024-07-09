export interface OnsConsumerStatusRequest {
    /**
     * 需要查询的消费端Group ID。
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 是否查询详细信息。取值说明如下：
     * - **true**：要查询详细信息，即可获取返回参数**ConsumerConnectionInfoList**和**DetailInTopicList**信息。
     * - **false**：默认值，不查询详细信息，即返回参数**ConsumerConnectionInfoList**和**DetailInTopicList**为空。
     * @example `true`
     */
    "Detail"?: boolean;
    /**
     * 是否打印Jstack信息。取值说明如下：
     * - **true**：要打印Jstack信息，可在**Jstack**返回参数中获取堆栈信息。
     *  >如需打印Jstack信息，请确保您的入参**Detail**设置为**true**。
     * - **false**：默认值，不打印Jstack信息，**Jstack**返回参数为空。
     * @example `true`
     */
    "NeedJstack"?: boolean;
    /**
     * 需查询的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
