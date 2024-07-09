export interface ApplyRoamingJoinPermissionRequest {
    /**
     * 泛在凭证所采用的频段ID。取值：
     * - **102**：CN470异频。
     * - **101**：CN470同频。
     * - **201**：AS923同频。
     * @example `102`
     */
    "FreqBandPlanGroupId": number;
    /**
     * 泛在凭证所采用的LoRaWAN Class模式。取值：A、B、C。
     * @example `A`
     */
    "ClassMode": string;
    /**
     * 泛在凭证名称，支持中文、英文字母、数字和下划线（_），长度限制4～30个字符，一个中文占两个字符。
     * @example `泛在凭证1`
     */
    "JoinPermissionName": string;
    /**
     * Class A的接收窗口延迟时间，取值范围1s~15s。
     * @example `1`
     */
    "RxDelay"?: number;
    /**
     * 当**ClassMode**取值为**B**时，设置期望下行速率，取值范围0~5。
     * @example `4`
     */
    "DataRate"?: number;
}
