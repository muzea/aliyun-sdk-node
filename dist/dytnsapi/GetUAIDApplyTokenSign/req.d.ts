export interface GetUAIDApplyTokenSignRequest {
    /**
     * 授权码。
     * > 在**号码分析服务**->[**标签广场**](https://dytns.console.aliyun.com/analysis/square)选择标签，提交使用申请，申请通过后，会获得该授权码。
     * @example `HwD97InG`
     */
    "AuthCode": string;
    /**
     * 外部流水号。
     * > 对应移动（CM）运营商中的traceId、msgId，三者保持一致即可
     * @example `b8b5b3a*******0b9893484fdf412c99`
     */
    "OutId": string;
    /**
     * 客户端类型。
     * - Android：30100
     * - IOS：30300
     * - H5：20200
     * - WEB：10010
     * @example `30300`
     */
    "ClientType": string;
    /**
     * 运营商为电信（CT）时必传，具体参考电信运营商文档。
     * @example `955EC1A869852EA8BC66F********D7C6E92017BBD5B001C736EFEAFB775C232`
     */
    "ParamKey"?: string;
    /**
     * 运营商为电信（CT）时必传，具体参考电信运营商文档。
     * @example `B2F0D4CD7A216D16CE2AF4BBC********29A454FDDD991F919106C12CB89ABA8`
     */
    "ParamStr"?: string;
    /**
     * 事件发生的时间戳，精确到毫秒。
     * 格式：yyyyMMddHHmmssSSS。
     * @example `20121227180001165`
     */
    "Time": string;
    /**
     * 用户所处的运营商。取值：
     * - **CM**：中国移动。
     * - **CU**：中国联通。
     * - **CT**：中国电信。
     * @example `CM`
     */
    "Carrier": string;
    /**
     * 请求方式，运营商为电信（CT）时必传。
     * 取值：
     * - json
     * - jsonp
     * @example `json`
     */
    "Format"?: string;
}
