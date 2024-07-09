export interface UpdateHoneypotRequest {
    /**
     * 蜜罐自定义配置。
     * >字段来源于[ListAvailableHoneypot](~~ListAvailableHoneypot~~)接口返回的**Template**字段。
     * @example `{\"burp\":\"open\",\"webshell\":\"open\",\"trojan_git\":\"close\",\"portrait_option\":\"true\"}`
     */
    "Meta"?: string;
    /**
     * 蜜罐ID。
     * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
     * @example `945607c2ae2a1a737c04599d6608065688bfc6048d9b9d306ce8dc8191c*****`
     */
    "HoneypotId": string;
    /**
     * 蜜罐自定义名称。
     * @example `ExtMail`
     */
    "HoneypotName"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
