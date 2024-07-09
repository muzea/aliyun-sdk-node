export interface CreateKeyRequest {
    /**
     * 密钥的描述。
     * 长度为0~8192个字符。
     * @example `key description example`
     */
    "Description"?: string;
    /**
     * 密钥的用途。取值：
     * - ENCRYPT/DECRYPT：数据加密和解密。
     * - SIGN/VERIFY：产生和验证数字签名。
     * 默认值：如果密钥支持签名验签，默认值为SIGN/VERIFY，否则默认值为ENCRYPT/DECRYPT。
     *
     * @example `ENCRYPT/DECRYPT`
     */
    "KeyUsage"?: string;
    /**
     * 密钥材料来源。取值：
     * - Aliyun_KMS（默认值）：密钥材料由阿里云KMS生成。
     * - EXTERNAL：密钥材料由您自行导入。
     * > - 请注意区分大小写。
     * - 默认密钥（主密钥）支持选择Aliyun_KMS或EXTERNAL；软件密钥管理实例中的密钥仅支持选择Aliyun_KMS；硬件密钥管理实例中的密钥支持选择Aliyun_KMS或EXTERNAL。
     * - 如果选择EXTERNAL，您需要自行导入密钥材料。具体操作，请参见[导入对称密钥材料](~~607841~~)或[导入非对称密钥材料](~~608827~~)。
     * @example `Aliyun_KMS`
     */
    "Origin"?: string;
    /**
     * 您无需输入本参数，KMS会为您的密钥设置合适的保护级别。
     * 密钥的保护级别，取值：
     * - SOFTWARE
     * - HSM
     * >- 如果指定了DKMSInstanceId：本参数输入后不生效。当实例为KMS软件密钥管理实例时，密钥保护级别为SOFTWARE；当实例为KMS硬件密钥管理实例时，密钥保护级别为HSM。
     * - 如果未指定DKMSInstanceId：建议您不输入，由KMS设置。当KMS在该地域有托管密码机时，本参数将设置HSM，否则为SOFTWARE。更多信息，请参见[托管密码机概述](~~125803~~)。
     * @example `SOFTWARE`
     */
    "ProtectionLevel"?: string;
    /**
     * 是否开启密钥自动轮转。取值：
     * - true：开启
     * - false（默认值）：不开启
     * 仅当密钥所属的密钥管理类型支持自动轮转时，该参数值有效。具体内容，请参见[密钥轮转](~~2358146~~)。
     * @example `true`
     */
    "EnableAutomaticRotation"?: boolean;
    /**
     * 自动轮转的时间周期。格式为integer\[unit]，其中integer表示时间长度，unit表示时间单位。合法的unit单位为：d（天）、h（小时）、m（分钟）、s（秒）。7d或者604800s均表示7天的周期。
     * - 当密钥为默认密钥时，取值为365天。
     * - 当密钥为软件密钥时，取值为7~365天。
     * - 当密钥为硬件密钥时，不支持自动轮转。
     * > 当EnableAutomaticRotation参数为true时，必须设置此参数。
     * @example `365d`
     */
    "RotationInterval"?: string;
    /**
     * 密钥规格，不同密钥管理类型的取值不同。关于密钥规格、遵循的标准、密钥算法的详细介绍，请参见[密钥管理类型和密钥规格](~~480161~~)。
     * > 不输入参数值时，密钥规格默认为Aliyun\_AES_256。
     * @example `Aliyun_AES_256`
     */
    "KeySpec"?: string;
    /**
     * KMS实例的实例ID。
     * >当您需要为KMS实例创建密钥时，必须指定本参数。当您需要创建默认密钥（主密钥）时，不需要指定本参数。
     * @example `kst-bjj62d8f5e0sgtx8h****`
     */
    "DKMSInstanceId"?: string;
    /**
     * 为密钥绑定标签。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
     * 最多输入20个标签。输入多个标签时，格式为`[{"TagKey":"key1","TagValue":"value1"},{"TagKey":"key2","TagValue":"value2"},...]`。
     * 每个标签键（Key）和每个标签值（Value）最多支持128个字符，可以包含英文大小写字母、数字、正斜线（/）、反斜线（\）、下划线（_）、短划线（-）、半角句号（.）、加号（+）、等于号（=）、半角冒号（:）、字符at（@）。
     * >标签键不能以aliyun和acs:开头。
     * @example `[{"TagKey":"disk-encryption","TagValue":"true"}]`
     */
    "Tags"?: string;
    /**
     * 密钥策略的具体内容，JSON格式。最大长度为32768个字节。
     * 关于密钥策略的详细介绍，请参见[密钥策略概述](~~2716468~~)。不输入该参数时，使用默认凭据策略。
     * 密钥策略内容包含：
     * - Version：密钥策略的版本，目前版本仅支持设置为1。
     * - Statement：密钥策略的语句，每个密钥策略包含一个或多个语句。
     * 密钥策略格式为：
     * ```
     * {
     *     "Version": "1",
     *     "Statement": [
     *         {
     *             "Sid": "Enable RAM User Permissions",
     *             "Effect": "Allow",
     *             "Principal": {
     *               "RAM": "acs:ram::112890462****:root"
     *             }
     *             "Action": [
     *                 "kms:*"
     *             ],
     *             "Resource": [
     *                 "*"
     *             ]
     *         }
     *     ]
     * }
     * ```
     * Statement详细介绍：
     * - Sid：可选，表示自定义的语句标识符。内容长度小于等于128字符，支持的字符为：大写英文字母（A-Z）、小写英文字母（a-z）、数字（0-9），特殊字符（ _/+=.@-）。
     * - Effect：必选，表示是允许还是拒绝该策略语句中的权限。取值为：Allow或Deny。
     * - Principal：必选，表示权限策略的授权主体，支持设置为当前阿里云账号（即密钥所属的阿里云账号），当前阿里云账号下的RAM用户、RAM角色，其他阿里云账号下的RAM用户、RAM角色。
     * - Action：必选，表示要允许或拒绝的API操作，内容必须以"kms:"开头。操作权限列表的范围，请参见[密钥策略概述](~~2716468~~)。如果您设置了列表外的操作，设置后也不会生效。
     * - Resource：必选，取值只能是*，表示本KMS密钥。
     * >授权给其他阿里云账号下的RAM用户、RAM角色后，您仍需在访问控制RAM侧，使用该RAM用户、RAM角色的阿里云账号为其授权使用该密钥，RAM用户、RAM角色才能使用该密钥。集体操作，请参见[密钥管理服务自定义权限策略参考](~~480682~~)、[为RAM用户授权](~~116146~~)、[为RAM角色授权](~~116147~~)。
     * @example `{"Statement":[{"Action":["kms:*"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:*"]},"Resource":["*"],"Sid":"kms default key policy"},{"Action":["kms:List*","kms:Describe*","kms:Create*","kms:Enable*","kms:Disable*","kms:Get*","kms:Set*","kms:Update*","kms:Delete*","kms:Cancel*","kms:TagResource","kms:UntagResource","kms:ImportKeyMaterial","kms:ScheduleKeyDeletion"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:user/for_test_policy"]},"Resource":["*"]}],"Version":"1"}`
     */
    "Policy"?: string;
}
