export interface CreateNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-tl32****`
     */
    "InstanceId": string;
    /**
     * 数据ID。
     * @example `common.yaml`
     */
    "DataId": string;
    /**
     * 分组ID。
     * @example `alime-bridge-aliyun`
     */
    "Group": string;
    /**
     * 应用名。
     * @example `saledatacenter-task`
     */
    "AppName"?: string;
    /**
     * 配置的标签。
     * @example `基本配置`
     */
    "Tags"?: string;
    /**
     * 配置的描述信息。
     * @example `基础模块配置`
     */
    "Desc"?: string;
    /**
     * 配置格式，包括text、json、xml等。
     * @example `text`
     */
    "Type"?: string;
    /**
     * 配置内容。
     * @example `asdf`
     */
    "Content"?: string;
    /**
     * 命名空间ID。
     * @example `547fd2a0-d0d6-****-80db2a1afb82`
     */
    "NamespaceId"?: string;
    /**
     * Beta发布的IP列表。
     * @example `100.117.XX.XX,100.117.XX.XX`
     */
    "BetaIps"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
