export interface StartInstanceRequest {
    /**
     * 实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例部署的VPC ID。
     * @example `vpc-bp1r4eg3yrxmygv****`
     */
    "VpcId": string;
    /**
     * 实例部署的vSwitch ID。
     * @example `vsw-bp1j3sg5979fstnpl****`
     */
    "VSwitchId": string;
    /**
     * 部署模式。V2系列实例中必填，V3及Confluent系列实例非必填。取值：
     * - **vpc**：VPC实例
     * - **eip**：公网/VPC实例
     * 实例的部署模式必须与其类型一致。VPC实例，部署模式为**vpc**。公网/VPC实例，部署模式为**eip**。
     * @example `vpc`
     */
    "DeployModule"?: string;
    /**
     * 实例部署的可用区ID。
     * - 必须为vSwitch的可用区ID。
     * - 格式可以为zoneX，也可以为RegionId-X。例如，可以设置为zonea或者cn-hangzhou-k。
     * > 当所填可用区资源不足时，可能部署的是其他可用区。
     * @example `cn-hangzhou-k`
     */
    "ZoneId"?: string;
    /**
     * 是否支持EIP 。取值：
     * - **true**：公网/VPC实例
     * - **false**：VPC实例
     * 该参数取值必须与实例类型一致。例如，实例类型为VPC实例，则此处必须设置为**false**。
     * @example `false`
     */
    "IsEipInner"?: boolean;
    /**
     * 是否设置新的用户名和密码。取值：
     * - **true**：设置新的用户名和密码。
     * - **false**：不设置新的用户名和密码。
     * 仅支持公网/VPC实例。
     * @example `false`
     */
    "IsSetUserAndPassword"?: boolean;
    /**
     * 用户名。
     * - V2、V3系列实例仅支持公网/VPC实例。
     * -   Confluent只能填写root或者空。
     * 默认值：V2、V3系列实例：username；Confluent实例：root。
     * @example `username`
     */
    "Username"?: string;
    /**
     * 用户密码。
     * - V2、V3系列实例仅支持公网/VPC实例。
     * - Confluent实例中该参数必填，且需要满足在密码中，大写字母、小写字母、数字、特殊字符至少占三种，长度为8-32位，特殊字符为!@#$%^&*()_+-=。
     * @example `password`
     */
    "Password"?: string;
    /**
     * 实例名称。
     * > 如果传递此参数，请确保此参数在同地域内唯一。
     * @example `newInstanceName`
     */
    "Name"?: string;
    /**
     * 是否要跨可用区部署。
     * - true：需要跨可用区部署。
     * - false：不需要跨可用区部署。
     * 默认值：true。
     * @example `false`
     */
    "CrossZone"?: boolean;
    /**
     * 实例的安全组。
     * 不填写时，云消息队列 Kafka 版会自动为您的实例配置安全组。如需填写，您需要先为实例创建安全组。具体操作，请参见[创建安全组](~~25468~~)。
     * @example `sg-bp13wfx7kz9pko****`
     */
    "SecurityGroup"?: string;
    /**
     * 部署的云消息队列 Kafka 版的版本。
     * -  V2系列可选值为2.2.0或者2.6.2。
     * -  V3系列可选值为3.3.1。
     * - Confluent系列可选值为7.4.0。
     * 默认值：
     * - V2系列：2.2.0
     * - V3系列：3.3.1
     * - Confluent系列：7.4.0
     * @example `V2系列：2.2.0
    V3系列：3.3.1
    Confluent系列：7.4.0
    `
     */
    "ServiceVersion"?: string;
    /**
     * 部署的云消息队列 Kafka 版的初始配置。配置信息必须是一个合法的JSON字符串。不填写时，该参数默认为空。
     * >
     * >- Confluent实例暂不支持在部署时指定Config。
     * > - enable.acl 配置不支持 2.2.0 以下的实例版本。
     * **Config**目前支持的参数配置如下：
     * - **enable.vpc_sasl_ssl**：是否开启VPC传输加密。取值说明如下：
     *     - **true**：开启VPC传输加密。如果开启，则须同时开启ACL。
     *     - **false**：默认值，不开启VPC传输加密。
     * - **enable.acl**：是否开启ACL。取值说明如下：
     *     - **true**：开启ACL。
     *     - **false**：默认值，不开启ACL。
     * - **kafka.log.retention.hours**：在磁盘容量充足的情况下，消息的最长保留时间。单位：小时。取值范围\[24, 480]，默认值**72**。磁盘容量不足（即磁盘水位达到85%）时，将提前删除旧的消息，以确保服务可用性。
     * - **kafka.message.max.bytes**：云消息队列 Kafka 版能收发的消息的最大值，单位：字节。取值范围\[1048576, 10485760]，默认值**1048576**。修改该配置前，请确认修改值是否匹配生产和消费客户端相应配置。
     * @example `{"kafka.log.retention.hours":"33"}`
     */
    "Config"?: string;
    /**
     * 同地域内的云盘加密的密钥ID。您可以在[密钥管理服务控制台](https://kms.console.aliyun.com/?spm=a2c4g.11186623.2.5.336745b8hfiU21)查看密钥ID，也可以创建新的密钥。具体操作，请参见[管理密钥](~~181610~~)。
     * 传入此参数表示开启实例加密（开启后无法关闭），在调用该接口时，系统会检查是否创建服务关联角色AliyunServiceRoleForAlikafkaInstanceEncryption，若未创建，则会自动创建服务关联角色。更多信息，请参见[服务关联角色](~~190460~~)。
     * >
     * >- Serverless V3 系列实例暂不支持在部署时指定 KMSKeyID。
     * @example `0d24xxxx-da7b-4786-b981-9a164dxxxxxx `
     */
    "KMSKeyId"?: string;
    /**
     * 预警联系人。
     * @example `王先生`
     */
    "Notifier"?: string;
    /**
     * 预警联系人手机号码。
     * @example `1581234****`
     */
    "UserPhoneNum"?: string;
    /**
     * 选择部署的主可用区候选集合，以及备可用区候选集合的二维数组。支持自定义code（`zone{可用区}`）与标准code（`cn-RegionID-{可用区}`）。
     * - 当希望跨可用区部署（isCrossZone=true），并且主可用区候选集合为可用区H或可用区F，备可用区候选集合为可用区K，以自定义code为例，则传入参数为`[[\"zoneh\",\"zonef\"],[\"zonek\"]]`。
     *   > 当主或备可用区填写多个可用区时，表示从多个可用区中任选一个，且没有优先级关系，以`[[\"zoneh\",\"zonef\"],[\"zonek\"]]`为例，最终部署的主可用区为可用区H或可用区F，备可用区为K。
     * - 当不希望跨可用区部署时（isCrossZone=false），可用区部署在可用区K，以自定义code为例，则传入参数`[[\"zonek\"],[]]`，注意此时仍需传入2个数组，第二个表示备可用区候选集合的数组为空[]即可。
     * @example `[[\"zonel\"],[\"zonek\"]]`
     */
    "SelectedZones"?: string;
    /**
     * 是否强制部署在所选可用区。
     * @example `false`
     */
    "IsForceSelectedZones"?: boolean;
    /**
     * 实例部署的vSwitch ID列表，该参数在V2和V3系列实例中必填，Confluent类型实例支持该参数，且VSwitchIds与VSwitchId需要至少填写一项，都填写时，优先使用VSwitchIds。
     */
    "VSwitchIds"?: string[];
}
