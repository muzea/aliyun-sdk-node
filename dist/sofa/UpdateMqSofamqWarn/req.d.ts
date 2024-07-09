export interface UpdateMqSofamqWarnRequest {
    /**
     * 报警时间范围
     * @example `00:00-24:00`
     */
    "AlertTime"?: string;
    /**
     * 报警通知人信息
     * @example `[["DingTalk", "机器人令牌", "组名"], ["DingTalk", "机器人令牌2", "组名2"]]`
     */
    "Contacts"?: string;
    /**
     * 延迟多少秒报警
     * @example `10`
     */
    "DelayTime"?: number;
    /**
     * 报警频率，单位分钟
     * @example `10`
     */
    "Frequency"?: number;
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx	`
     */
    "InstanceId": string;
    /**
     * 阈值
     * @example `3000`
     */
    "Threshold"?: number;
    /**
     * 指定修改的报警规则
     * @example `10000001 `
     */
    "WarnId": number;
}
