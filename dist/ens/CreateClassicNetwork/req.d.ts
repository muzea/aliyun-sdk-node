export interface CreateClassicNetworkRequest {
    /**
     * ENS的节点ID。
     * @example `cn-chengdu-xxxx-4`
     */
    "EnsRegionId": string;
    /**
     * 网络的网段。您可以使用以下网段或其子集作为network的网段：
     * - 10.0.0.0/8（默认值）。
     * - 172.16.0.0/12。
     * - 192.168.0.0/16。
     * @example `10.0.0.0/16`
     */
    "CidrBlock": string;
    /**
     * 网络名称。命名规则如下：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以 http://和https://开头。
     * - 可以包含数字、英文冒号（:）、下划线（_）或者短划线（-）。
     * @example `example`
     */
    "NetworkName"?: string;
    /**
     * 描述信息。命名规则如下：
     * * 长度为 2~256 个字符，必须以字母或中文开头，但不能以 http://或 https://开头。
     * @example `This is my vswitch.`
     */
    "Description"?: string;
}
