export interface OnsTopicCreateRequest {
    /**
     * 需创建的Topic的名称，取值说明如下：
     * - 长度限制为3~64个字符，只能包含字母、数字、短划线（-）和下划线（_）。
     * - “CID”和“GID”是Group ID的保留字段，Topic名称不能以“CID”和“GID”开头。
     * - 如果创建的Topic所在的实例有命名空间，则Topic的名称需要保证实例内唯一，不能和本实例下已有的Topic名称或Group ID重复；跨实例之间可以重名，例如实例A的Topic名称可以和实例B的Topic名称重复，也可以和实例B的Group ID重复。
     * - 如果新建的Topic所在的实例无命名空间，则Topic的名称需要保证跨实例和跨地域全局唯一，全局范围内不能和已有的Topic名称或Group ID重复。
     * > 实例是否有命名空间，可以在云消息队列 RocketMQ 版控制台**实例详情**页面的**基础信息区域**查看。
     * @example `test`
     */
    "Topic": string;
    /**
     * 消息类型。取值说明如下：
     * - **0**：普通消息
     * - **1**：分区顺序消息
     * - **2**：全局顺序消息
     * - **4**：事务消息
     * - **5**：定时/延时消息
     * 各类型消息的详细说明，请参见[消息类型列表](~~155952~~)。
     * @example `0`
     */
    "MessageType": number;
    /**
     * 需创建的Topic的描述信息。
     * @example `测试`
     */
    "Remark"?: string;
    /**
     * 需创建的Topic所对应的实例ID。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
}
