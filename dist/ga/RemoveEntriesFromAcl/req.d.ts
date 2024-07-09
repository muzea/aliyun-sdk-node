export interface RemoveEntriesFromAclRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组ID。
     * @example `nacl-hp34s2h0xx1ht4nwo****`
     */
    "AclId": string;
    /**
     * 待删除的访问控制策略组条目，一次最多支持删除20条。
     */
    "AclEntries": {
        /**
         * 访问控制策略组条目，即IP地址条目(192.168.XX.XX)或IP地址段条目(10.0.XX.XX/24)。
         * 一次最多支持删除50条。
         * > 该参数必填。
         * @example `10.0.XX.XX/24`
         */
        Entry: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
