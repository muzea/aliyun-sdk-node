export interface RobotCallRequest {
    /**
     * 外呼主叫号码。
     * @example `0571****5678`
     */
    "CalledShowNumber": string;
    /**
     * 被叫号码。
     * @example `131****2204`
     */
    "CalledNumber": string;
    /**
     * 机器人ID，即话术ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**智能外呼机器人**>**话术管理**中获取。
     * @example `350000****`
     */
    "RobotId": number;
    /**
     * 预留给调用方使用的ID。
     * 最终会通过在回执消息中将此ID带回给调用方。字符串类型，长度为1~15个字节。
     * @example `abcdefgh`
     */
    "OutId"?: string;
    /**
     * 通话过程是否录音。取值：
     * - **false**（默认值）：不录音。
     * - **true**：录音。
     * @example `true`
     */
    "RecordFlag"?: boolean;
    /**
     * 是否启用号码状态（早媒体）识别标识。取值：
     * - **false**（默认值）：不启用。
     * - **true**：启用。
     * > 设为**true**会记录通话未接听的原因。
     * @example `false`
     */
    "EarlyMediaAsr"?: boolean;
    /**
     * 机器人的参数列表。JSON格式。总长度不要超过512个字节。
     * @example `{"name":"张三","age":"25"}`
     */
    "Params"?: string;
}
