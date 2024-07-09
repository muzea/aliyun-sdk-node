export interface CreateSecretRequest {
    /**
     * 凭据名称。
     * 长度不超过192个字符，可包含中文、英文字母、数字、下划线（_）、正斜线（/）、加号（+）、等号（=）、半角句号（.）、短划线（-）和字符（@），其中中文的字符长度不超过64个。不同类型的凭据名称要求如下：
     * - 当SecretType取值为Generic（通用凭据）或Rds（RDS凭据）时，不能以`acs/`开头。
     * - 当SecretType取值为RAMCredentials（RAM凭据）时，使用固定值`$Auto`。此时KMS自动生成凭据名称，以`acs/ram/user/`开头，包含RAM用户显示名称。
     * - 当SecretType取值为ECS（ECS凭据）时，必须以`acs/ecs/`开头。
     * @example `mydbconninfo`
     */
    "SecretName": string;
    /**
     * 初始版本的版本号，版本号在该凭据内唯一。
     * 长度不超过64个字符。
     * @example `v1`
     */
    "VersionId": string;
    /**
     * 用于加密凭据值的密钥ID。
     * > 密钥和凭据需要属于同一个KMS实例，且密钥必须为对称密钥。
     * @example `key-gzz63ff0db5hg3qje****`
     */
    "EncryptionKeyId"?: string;
    /**
     * 凭据值。长度不超过30720字节（30KB）。KMS使用指定的密钥对其加密后，存入初始版本中。
     * - 当SecretType取值为Generic（通用凭据）时，您可以自定义凭据值。
     * - 当SecretType取值为Rds（RDS凭据）时，凭据值格式为：`{"Accounts":[{"AccountName":"","AccountPassword":""}]}`。其中，`AccountName`为RDS实例的账号名称，`AccountPassword`为RDS实例的账号口令。
     * - 当SecretType取值为RAMCredentials（RAM凭据）时，凭据值格式为：`{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":""}]}`。其中，`AccessKeyId`是访问密钥ID，`AccessKeySecret`是访问密钥内容。您需要指定RAM用户的所有AccessKey。
     * - 当SecretType取值为ECS（ECS凭据）时，凭据值格式为：
     *    - 当ExtendedConfig参数中SecretSubType取值为Password时：`{"UserName":"","Password": ""}`。其中，`UserName`为登录ECS实例的用户名，`Password`为登录ECS实例的密码。
     *    - 当ExtendedConfig参数中SecretSubType取值为SSHKey时：`{"UserName":"","PublicKey": "", "PrivateKey": ""}`。其中，`PublicKey`为登录ECS实例的SSH格式公钥，`PrivateKey`为登录ECS实例的私钥。
     * @example `{"Accounts":[{"AccountName":"user1","AccountPassword":"****"}]}`
     */
    "SecretData": string;
    /**
     * 凭据值类型。取值：
     * - text（默认值）：文本类型
     * - binary：二进制类型
     * > 当SecretType取值为Rds、RAMCredentials或ECS时，SecretDataType取值只能为text。
     * @example `text`
     */
    "SecretDataType"?: string;
    /**
     * 凭据的描述信息。
     * @example `mydbinfo`
     */
    "Description"?: string;
    /**
     * 凭据的标签。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
     * 标签建和标签值的格式：最多支持128个字符，可以包含英文大小写字母、数字、正斜线（/）、反斜线（\）、下划线（_）、短划线（-）、半角句号（.）、加号（+）、等于号（=）、半角冒号（:）、字符at（@）。
     * - 标签键不能以aliyun或acs:开头。
     * - 每个凭据最多可以设置20个标签键值对。
     * @example `[{\"TagKey\":\"key1\",\"TagValue\":\"val1\"},{\"TagKey\":\"key2\",\"TagValue\":\"val2\"}]`
     */
    "Tags"?: string;
    /**
     * 凭据类型。取值：
     * - Generic（默认值）：通用凭据。
     * - Rds：RDS凭据。
     * - RAMCredentials：RAM凭据。
     * - ECS：ECS凭据。
     * @example `Rds`
     */
    "SecretType"?: string;
    /**
     * 凭据的拓展配置，用于指定特定凭据类型的属性。长度不超过1024个字符。
     * - 当SecretType取值为Generic（通用凭据）时，忽略该参数。
     * - 当SecretType取值为Rds（RDS凭据）时，需要指定ExtendedConfig的如下参数：
     *  - SecretSubType（必填）：凭据子类型。取值：
     *      - SingleUser：指定凭据管家以单账号模式RDS凭据。凭据轮转时，指定账号的口令会被重置为新的随机口令。
     *      - DoubleUsers：指定凭据管家以双账号模式RDS凭据，ACSCurrent和ACSPrevious分别引用其中一个账号。凭据轮转时，ACSPrevious引用账号的口令会被重置为新的随机口令，随后凭据管家交换ACSCurrent和ACSPrevious对RDS账号的引用。
     *  - DBInstanceId（必填）：指定RDS账号所在的RDS实例ID。
     *  - CustomData（可选）：自定义数据。取值为JSON格式的键值对，最多不超过10个键值对，多个键值对用半角逗号（,）间隔。取值示例：`{"Key1": "v1", "fds":"fdsf"}`。默认值为空`{}`。
     * - 当SecretType取值为RAMCredentials（RAM凭据）时，需要指定ExtendedConfig的如下参数：
     *  - SecretSubType（必填）：凭据子类型。取值：  RamUserAccessKey。
     *  - UserName（必填）：RAM用户名称。
     *  - CustomData（可选）：自定义数据。取值为JSON格式的键值对，最多不超过10个键值对，多个键值对用半角逗号（,）间隔。默认值为空`{}`。
     * - 当SecretType取值为ECS（ECS凭据）时，需要指定ExtendedConfig的如下参数：
     *  - SecretSubType（必填）：凭据子类型。取值：
     *      - Password：ECS口令。
     *      - SSHKey：ECS SSH公私钥。
     *  - RegionId（必填）：ECS实例所在地域ID。
     *  - InstanceId（必填）：ECS实例ID。
     *  - CustomData（可选）：自定义数据。取值为JSON格式的键值对，最多不超过10个键值对，多个键值对用半角逗号（,）间隔。默认值为空`{}`。
     *
     * > 当SecretType取值为Rds、RAMCredentials或ECS时，必须设置该参数。
     * @example `{"SecretSubType":"SingleUser", "DBInstanceId":"rm-bp1b3dd3a506e****" ,"CustomData":{"Key1": "v1", "fds":"fdsf"}}`
     */
    "ExtendedConfig"?: any;
    /**
     * 是否开启自动轮转，取值：
     * - true：开启自动轮转。
     * - false（默认值）：不开启自动轮转。
     * > 当SecretType取值为Rds（RDS凭据）、RAMCredentials（RAM凭据）或ECS（ECS凭据）时，该参数有效。当SecretType取值为Generic（通用凭据）时，不支持自动轮转，您可通过[PutSecretValue](~~154503~~)操作手工轮转。
     * @example `true`
     */
    "EnableAutomaticRotation"?: boolean;
    /**
     * 自动轮转的周期。取值范围：6小时~8,760小时（365天）。
     * 格式为`integer[unit]`，其中`integer`表示时间长度，`unit`表示时间单位。
     * unit取值：d（天）、h（小时）、m（分钟）、s（秒）。例如：7d或者604,800s均表示7天的周期。
     * > 仅当EnableAutomaticRotation取值为true时，必须设置该参数，否则无需设置。
     * @example `30d`
     */
    "RotationInterval"?: string;
    /**
     * KMS实例的实例ID。
     * @example `kst-bjj62d8f5e0sgtx8h****`
     */
    "DKMSInstanceId"?: string;
    /**
     * 凭据策略的具体内容，JSON格式。最大长度为32768个字节。
     * 关于凭据策略的详细介绍，请参见[凭据策略概述](~~2716465~~)。不输入该参数时，使用默认凭据策略。
     * 凭据策略内容包含：
     * - Version：凭据策略的版本，目前版本仅支持设置为1。
     * - Statement：凭据策略的语句，每个凭据策略包含一个或多个语句。
     * 凭据策略格式为：
     * ```
     * {
     *     "Version": "1",
     *     "Statement": [
     *         {
     *             "Sid": "Enable RAM User Permissions",
     *             "Effect": "Allow",
     *             "Principal": {
     *               "RAM": "acs:ram::123456789012:root"
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
     * - Action：必选，表示要允许或拒绝的API操作，内容必须以"kms:"开头。操作权限列表的范围，请参见[凭据策略概述](~~2716465~~)。如果您设置了列表外的操作，设置后也不会生效。
     * - Resource：必选，取值只能是*，表示本KMS凭据。
     * >授权给其他阿里云账号下的RAM用户、RAM角色后，您仍需在访问控制RAM侧，使用该RAM用户、RAM角色的阿里云账号为其授权使用该凭据，RAM用户、RAM角色才能使用该凭据。集体操作，请参见[密钥管理服务自定义权限策略参考](~~480682~~)、[为RAM用户授权](~~116146~~)、[为RAM角色授权](~~116147~~)。
     * @example `{"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }`
     */
    "Policy"?: string;
}
