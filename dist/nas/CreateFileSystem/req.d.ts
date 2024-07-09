export interface CreateFileSystemRequest {
    /**
     * 文件系统类型。
     * 取值：
     * - standard（默认值）：通用型NAS
     * - extreme：极速型NAS
     * - cpfs：文件存储CPFS
     * > 仅中国站支持CPFS文件系统。
     * @example `standard`
     */
    "FileSystemType"?: string;
    /**
     * 计费类型。
     * 取值：
     * - PayAsYouGo（默认值）：按量付费
     * - Subscription：包年包月
     * @example `PayAsYouGo`
     */
    "ChargeType"?: string;
    /**
     * 包年包月时长。
     * 单位：月，当ChargeType=Subscription时必填且有效。
     * 当包年包月实例到期时未进行续费，实例到期会自动释放。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 文件系统容量。单位：GiB。
     * <props="china">当FileSystemType=extreme或cpfs时必填且有效。</props>
     * <props="intl">当FileSystemType=extreme时必填且有效。</props>
     * 可选值请参考购买页面的实际规格：
     * <props="china">
     * -  [极速型NAS按量付费购买页面](https://common-buy.aliyun.com/?commodityCode=nas_extreme_post#/buy)
     * - [极速型NAS包年包月购买页面](https://common-buy.aliyun.com/?commodityCode=nas_extreme#/buy)
     * - [并行文件系统CPFS按量付费购买页面](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
     * - [并行文件系统CPFS包年包月购买页面](https://common-buy.aliyun.com/?commodityCode=cpfs#/buy)
     * </props>
     * <props="intl">[极速型NAS按量付费购买页面](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)</props>
     * @example `100`
     */
    "Capacity"?: number;
    /**
     * 文件系统吞吐上限。
     * 单位：MB/s
     * 具体可选规格值请参考购买页面的实际规格。
     * <props="china">
     * - [并行文件系统CPFS按量付费购买页面](https://common-buy.aliyun.com/?commodityCode=nas_cpfs_post#/buy)
     * - [并行文件系统CPFS包年包月购买页面](https://common-buy.aliyun.com/?commodityCode=cpfs#/buy)
     * </props>
     * @example `150`
     */
    "Bandwidth"?: number;
    /**
     * 存储类型。
     * <props="china">
     * - 当FileSystemType=standard时，取值：Performance（性能型）、Capacity（容量型）。
     * - 当FileSystemType=extreme时，取值：standard（标准型）、advance（高级型）。
     * - 当FileSystemType=cpfs时，取值：advance_100（100 MB/s/TiB基线）、advance_200（200 MB/s/TiB基线）。
     * </props>
     * <props="intl">
     * - 当FileSystemType=standard时，取值：Performance（性能型）、Capacity（容量型）。
     * - 当FileSystemType=extreme时，取值：standard（标准型）、advance（高级型）。
     * </props>
     * @example `Performance`
     */
    "StorageType": string;
    /**
     * 可用区ID。
     * 可用区是指在同一地域内，电力和网络互相独立的物理区域。
     * 当FileSystemType=standard时，该参数非必选，默认根据ProtocolType及StorageType配置随机选择一个符合条件的可用区。
     * <props="china">当FileSystemType=extreme或FileSystemType=cpfs时，该参数必选。</props>
     * <props="intl">当FileSystemType=extreme时，该参数必选。</props>
     * >  - 同一地域不同可用区之间的文件系统与ECS云服务器互通。
     * >  - 建议文件系统与云服务器ECS属于同一可用区，避免跨可用区产生的时延。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 文件传输协议类型。
     * <props="china">
     * - 当FileSystemType=standard时，取值：NFS、SMB。
     * - 当FileSystemType=extreme时，取值：NFS。
     * - 当FileSystemType=cpfs时，取值：cpfs。
     * </props>
     * <props="intl">
     * - 当FileSystemType=standard时，取值：NFS、SMB。
     * - 当FileSystemType=extreme时，取值：NFS。
     * </props>
     * @example `NFS`
     */
    "ProtocolType": string;
    /**
     * 文件系统是否加密。
     * 使用KMS服务托管密钥，对文件系统落盘数据进行加密存储。在读写加密数据时，无需解密。
     * 取值：
     * - 0（默认值）：不加密。
     * - 1：NAS托管密钥。当FileSystemType=standard或extreme时，支持NAS托管密钥。
     * - 2：用户管理密钥。仅当FileSystemType=extreme时，支持用户管理密钥。
     * > 仅美国（硅谷）、美国（弗吉尼亚）、 英国（伦敦）、 澳大利亚（悉尼）、  德国（法兰克福）、  印度（孟买）、  新加坡地域支持用户管理密钥（KMS）功能。
     * @example `1`
     */
    "EncryptType"?: number;
    /**
     * 快照ID。
     * 仅支持极速型NAS。
     * >通过快照创建文件系统，创建的文件系统版本和快照源文件系统版本一致。例如：快照的源文件系统版本是1，需要创建版本2的文件系统，可以先通过快照创建一个文件系统A，然后再创建一个满足版本2配置的文件系统B，把文件系统A中的数据拷贝至文件系统B，拷贝完成后把业务迁移到文件系统B即可。
     * @example `s-xxx`
     */
    "SnapshotId"?: string;
    /**
     * 专有网络ID。
     * <props="china">当FileSystemType=cpfs时，必须配置此参数。</props>
     * <props="china">当FileSystemType=standard或extreme时，此参数为接口预留参数，暂未生效，您无需配置。</props>
     * <props="intl">此参数为接口预留参数，暂未生效，您无需配置。</props>
     * @example `无`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * <props="china">当FileSystemType=cpfs时，必须配置此参数。</props>
     * <props="china">当FileSystemType=standard或extreme时，此参数为接口预留参数，暂未生效，您无需配置。</props>
     * <props="intl">此参数为接口预留参数，暂未生效，您无需配置。</props>
     * @example `无`
     */
    "VSwitchId"?: string;
    /**
     * 文件系统描述。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `此文件系统的描述。`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * KMS密钥ID。
     * 仅当EncryptType=2时该参数必填。
     * @example `无`
     */
    "KmsKeyId"?: string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和NAS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但FileSystemId为空。
     * - false（默认值）：发送正常请求，通过检查后直接创建实例。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 资源组ID。
     * 您可以通过[资源管理控制台](https://resourcemanager.console.aliyun.com/resource-groups?)查看资源组ID。
     * @example `rg-acfmwavnfdf****
    `
     */
    "ResourceGroupId"?: string;
}
