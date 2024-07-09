export interface SmartCallOperateRequest {
    /**
     * 通话的唯一回执ID。可通过[SmartCall](~~393526~~)接口获取。
     * @example `116012854210^1028142****`
     */
    "CallId": string;
    /**
     * 在智能外呼通话中，指定被叫号码发起的动作。
     * > 当前仅支持参数**parallelBridge**，表示指定动作为被叫号码与呼叫中心坐席桥接。
     * @example `parallelBridge`
     */
    "Command": string;
    /**
     * 扩展字段。
     * @example `Param`
     */
    "Param"?: string;
}
