export interface DescribeDBInstanceTDEInfoResponse {
    /**
     * TDE状态，返回值为：
     * - **enabled**：开启状态。
     * - **disabled**：关闭状态。
     * > 当TDK状态为关闭时，不会返回**RoleARN**、**EncryptionKey**和**EncryptorName**参数。
     * @example `enabled`
     */
    TDEStatus: string;
    /**
     * 请求ID。
     * @example `F4DD0E29-361B-42F2-9301-B0048CCCE5D6`
     */
    RequestId: string;
    /**
     * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息。
     * @example `acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    RoleARN: string;
    /**
     * 实例的自定义密钥。
     * 目前仅以下地域支持BYOK（Bring Your Own Key，用户可以自行管理和拥有加密密钥）：
     * - 华东1（杭州）
     * - 华东2（上海）
     * - 华北2（北京）
     * - 华南1（深圳）
     * - 中国（香港）
     * - 新加坡
     * - 马来西亚（吉隆坡）
     * > 支持BYOK，用户可以管理且拥有密钥，系统将返回用户的自定义密钥；不支持BYOK，用户不可管理密钥，系统将返回字符串`NoActiveBYOK`。
     * @example `2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
     */
    EncryptionKey: string;
    /**
     * 加密算法。
     * @example `aes-256-cbc`
     */
    EncryptorName: string;
}
