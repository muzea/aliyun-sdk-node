export interface CreateSecurityPolicyRequest {
    /**
     * 支持的TLS协议版本，取值：**TLSv1.0**、**TLSv1.1**、**TLSv1.2**和**TLSv1.3**。
     */
    "TlsVersions": string[];
    /**
     * 安全策略名称。
     * 长度为1~200个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `TLSCipherPolicy`
     */
    "SecurityPolicyName"?: string;
    /**
     * 资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
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
     */
    "Ciphers": string[];
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建自定义安全策略。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `ValueTest`
         */
        Value: string;
    }[];
}
