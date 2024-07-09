export interface SendCcoSmartCallOperateRequest {
    /**
     * 产品名称。默认取值：**aiccs**。
     * @example `aiccs`
     */
    "ProdCode"?: string;
    /**
     * 通话的唯一回执ID。可以通过[SendCcoSmartCall](~~311247~~)返回。
     * @example `116012854210^102814279****`
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
