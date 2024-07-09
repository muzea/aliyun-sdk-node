export interface UAIDVerificationRequest {
    /**
     * 外部流水号。
     * @example `b8b5b3a*******0b9893484fdf412c99
    `
     */
    "OutId"?: string;
    /**
     * 用户所处的运营商。取值：
     * - **CM**：中国移动。
     * - **CU**：中国联通。
     * - **CT**：中国电信。
     * @example `CM`
     */
    "Carrier": string;
    /**
     * 运营商授权Token。
     * > 获取授权Token及其签名值请参考GetUAIDApplyTokenSign API文档。
     * @example `MIGfMA0********3DQEBAQUAA4GNADCB`
     */
    "Token": string;
    /**
     * 用户授权码，代表用户已授权。值为不大于128位的唯一随机数即可。
     * <warning>集成时，建议在产品的隐私政策中加入UAID的隐私政策相关内容。</warning>
     * @example `Md****a3Em`
     */
    "UserGrantId"?: string;
    /**
     * 授权码。
     * > 在**号码分析服务**->[**标签广场**](https://dytns.console.aliyun.com/analysis/square)选择标签，提交使用申请，申请通过后，会获得该授权码。
     * @example `HwD97InG`
     */
    "AuthCode": string;
    /**
     * 公网IP地址，当运营商为联通（CU）时必传，兼容IPV4和IPV6地址。
     * @example `2408:8440:308:29dc:ed00:c4ec:475c:25a4`
     */
    "Ip"?: string;
    /**
     * 省份id，当运营商为联通（CU）时选传。与获取token时返回值中province字段保持一致。
     * @example `1`
     */
    "Province"?: string;
}
