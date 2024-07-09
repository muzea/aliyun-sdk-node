export interface UpdateConsumerGroupRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 消费组的新名称。支持中文汉字、英文字母、数字和下划线（_），长度为4~30个字符，一个汉字计为两个字符。
     * @example `消费组2`
     */
    "NewGroupName": string;
    /**
     * 消费组ID。调用[CreateConsumerGroup](~~170388~~)创建消费组成功后，会返回消费组ID。您可以调用[QueryConsumerGroupList](~~170419~~)按消费组名称查询消费组ID。
     * @example `nJRaJPn5U1JITGf******`
     */
    "GroupId": string;
}
