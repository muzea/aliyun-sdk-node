export interface ModifyStrategyTargetRequest {
    /**
     * 访问源IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 配置类型。固定取值：**hc_strategy**。
     * @example `hc_strategy`
     */
    "Type": string;
    /**
     * 保存策略返回的策略ID。此参数为JSON格式，必须包含以下字段：
     * - **strategyId**：策略ID。
     * @example `{"strategyId":8070645}`
     */
    "Config": string;
    /**
     * 策略配置资产群组。此参数为JSON格式，包含以下参数：
     * - **TargetType**：策略生效目标类型固定取值**groupId**，表示按照资产所在分组生效。
     * - **BindUuidCount**：绑定机器数量。
     * - **Target**：资产分组ID。
     * - **Flag**：操作。取值如下：
     *     - **del**：删除
     *     - **add**：增加
     * @example `[{"Target":"9273980","BindUuidCount":5320,"TargetType":"groupId","Flag":"del"},{"Target":"9677606","TargetType":"groupId","Flag":"del"},{"Target":"10121607","BindUuidCount":7,"TargetType":"groupId","Flag":"add"},{"Target":"10670708","BindUuidCount":2,"TargetType":"groupId","Flag":"del"},{"Target":"11246338","BindUuidCount":6,"TargetType":"groupId","Flag":"del"},{"Target":"11291161","BindUuidCount":13,"TargetType":"groupId","Flag":"del"}]`
     */
    "Target": string;
}
