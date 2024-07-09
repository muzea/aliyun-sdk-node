export interface CreateTLSCipherPolicyRequest {
    /**
     * 负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * TLS策略名称。长度为2~200个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `TLSPolicy-test`
     */
    "Name": string;
    /**
     * 支持的加密套件列表，具体依赖TLSVersion值。最多支持添加32个加密套件。
     * TLSv1.0和TLSv1.1 支持：
     * - **ECDHE-ECDSA-AES128-SHA**
     * - **ECDHE-ECDSA-AES256-SHA**
     * - **ECDHE-RSA-AES128-SHA**
     * - **ECDHE-RSA-AES256-SHA**
     * - **AES128-SHA**
     * - **AES256-SHA**
     * - **DES-CBC3-SHA**
     * TLSv1.2支持：
     * -   **ECDHE-ECDSA-AES128-SHA**
     * -   **ECDHE-ECDSA-AES256-SHA**
     * -   **ECDHE-RSA-AES128-SHA**
     * -   **ECDHE-RSA-AES256-SHA**
     * -   **AES128-SHA**
     * -   **AES256-SHA**
     * -   **DES-CBC3-SHA**
     * -   **ECDHE-ECDSA-AES128-GCM-SHA256**
     * -   **ECDHE-ECDSA-AES256-GCM-SHA384**
     * -   **ECDHE-ECDSA-AES128-SHA256**
     * -   **ECDHE-ECDSA-AES256-SHA384**
     * -   **ECDHE-RSA-AES128-GCM-SHA256**
     * -   **ECDHE-RSA-AES256-GCM-SHA384**
     * -   **ECDHE-RSA-AES128-SHA256**
     * -   **ECDHE-RSA-AES256-SHA384**
     * -   **AES128-GCM-SHA256**
     * -   **AES256-GCM-SHA384**
     * -   **AES128-SHA256**
     * -   **AES256-SHA256**
     * TLSv1.3支持：
     * - **TLS_AES_128_GCM_SHA256**
     * - **TLS_AES_256_GCM_SHA384**
     * - **TLS_CHACHA20_POLY1305_SHA256**
     * - **TLS_AES_128_CCM_SHA256**
     * - **TLS_AES_128_CCM_8_SHA256**
     * @example `AES256-SHA256`
     */
    "Ciphers": string[];
    /**
     * 支持的TLS协议版本。取值：**TLSv1.0**、**TLSv1.1**、**TLSv1.2**和**TLSv1.3**。最多支持添加4个TLS协议版本。
     * @example `TLSv1.0`
     */
    "TLSVersions": string[];
}
