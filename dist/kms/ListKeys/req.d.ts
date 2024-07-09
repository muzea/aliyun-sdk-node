export interface ListKeysRequest {
    /**
     * 当前页数。
     * 取值范围：大于0。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回值的个数。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 主密钥过滤器。由Key-Values键值对组成，长度为0~10。
     * - Key
     *     - 描述：需要过滤的属性。
     *     - 类型：String。
     *     - 取值：
     *         - KeyState：密钥状态。
     *         - KeySpec：密钥类型。
     *         - KeyUsage：密钥用途。
     *         - ProtectionLevel：保护等级。
     *         - CreatorType：创建者类型。
     *         - DKMSInstanceId：KMS实例的实例ID。
     * - Values
     *     - 描述：期望过滤后包含的值。
     *     - 类型：String数组。
     *     - 长度：0~10。
     *     - 取值：
     *         - Key取值为KeyState时：Enabled（启用）、Disabled（禁用）、PendingDeletion（待删除）、PendingImport（待导入）。
     *         - Key取值为KeySpec时：Aliyun_AES_256、Aliyun_SM4、RSA_2048、EC_P256、EC_P256K、EC_SM2。
     * 说明：仅在支持托管密码机且已通过国密局商用密码检测认证的地域可以创建EC_SM2和Aliyun_SM4类型的密钥，地域详情请参见[支持的地域](~~125803~~)。如果您所选择地域不支持EC_SM2和Aliyun_SM4，指定这两个参数将被忽略。
     *         - Key取值为KeyUsage时：ENCRYPT/DECRYPT（数据加密和解密）、SIGN/VERIFY （产生和验证数字签名）。
     *         -  Key取值为ProtectionLevel时：SOFTWARE（软件）、HSM（硬件）。
     * 说明：HSM保护等级仅在特定地域支持，地域详情请参见[支持的地域](~~125803~~)。如您所选择地域不支持HSM，指定该参数将被忽略。
     *         - Key取值为CreatorType时：User（获取由用户创建的主密钥）、Service （获取由用户授权其他云产品自动创建的主密钥）。
     *         - Key取值为DKMSInstanceId时：kst-xxx（KMS实例的实例ID）。
     * Filters不同Key之间的逻辑关系为AND，同一个Key中的多个Value之间的逻辑关系为OR。例如：输入
     * `
     * [ {"Key":"KeyState", "Values":["Enabled","Disabled"]},
     *   {"Key":"KeyState", "Values":["PendingDeletion"]},
     *   {"Key":"KeySpec", "Values":["Aliyun_AES_256"]}
     * ]
     * `
     * 时，语义为：
     * `
     * (KeyState=Enabled OR KeyState=Disabled OR KeyState=PendingDeletion)
     * 	AND (KeySpec=Aliyun_AES_256)。
     * `
     * @example `[{"Key":"KeyState", "Values":["Enabled","Disabled"]}]`
     */
    "Filters"?: string;
}
