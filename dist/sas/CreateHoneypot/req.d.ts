export interface CreateHoneypotRequest {
    /**
     * 蜜罐镜像名称。
     * > 您可以调用[ListAvailableHoneypot](~~ListAvailableHoneypot~~)接口返回的**HoneypotImageName**字段。
     * @example `HoneyPotImageName`
     */
    "HoneypotImageName": string;
    /**
     * 蜜罐自定义名称。
     * @example `ruoyi`
     */
    "HoneypotName": string;
    /**
     * 蜜罐管理节点ID。
     * > 调用[ListHoneypotNode](~~ListHoneypotNode~~)接口获取该值。
     * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
     */
    "NodeId": string;
    /**
     * 蜜罐镜像ID。
     * > 您可以调用[ListAvailableHoneypot](~~ListAvailableHoneypot~~))接口返回的**HoneypotImageId**字段。
     * @example `sha256:ebc4c102ac407d53733c2373e8888a733ddce86f163ccbe7492ae1cbf26****`
     */
    "HoneypotImageId": string;
    /**
     * 蜜罐自定义配置。JSON格式。包含以下字段：
     * - **trojan_git**：Git反制。取值：
     *     -   **zip**：Git源码包
     *     -  **web**：.git目录泄漏
     *     -  **close**：关闭
     * - **trojan_git\_addr**：Git反制连接地址
     * - **trojan_git.zip**：Git反制木马包
     * - **burp**：Burp反制。取值：
     *      - **open**：开启
     *     - **close**：关闭
     * - **portrait_option**：溯源配置。取值：
     *     - **false**：关闭
     *     - **true**：开启
     * @example `{\"trojan_git\":\"close\",\"burp\":\"close\",\"portrait_option\":\"false\"}`
     */
    "Meta"?: string;
}
