export interface UpdateAllowedIpRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 变更类型。取值：
     * - **add**：增加。
     * - **delete**：删除。
     * @example `add`
     */
    "UpdateType": string;
    /**
     * 端口范围。取值：
     * - **9092/9092**：专有网络 VPC - PLAINTEXT 协议。
     * - **9093/9093**：公网 - SASL_SSL 协议。
     * - **9094/9094**：专有网络 VPC - SASL_PLAINTEXT 协议。
     * - **9095/9095**：专有网络 VPC - SASL_SSL 协议。
     * 该参数需要与**AllowdedListType**对应。
     * @example `9092/9092`
     */
    "PortRange": string;
    /**
     * 白名单的类型。取值：
     * - **vpc**：专有网络VPC。
     * - **internet**：公网。
     * @example `vpc`
     */
    "AllowedListType": string;
    /**
     * IP列表。可以是网段，例如：**192.168.0.0/16**。
     * - 当**UpdateType**为**add**时，可以填写多项，以英文逗号（,）分隔。
     * - 当**UpdateType**为**delete**时，一次只能填写单项。
     * - 删除需谨慎。
     * @example `0.0.0.0/0`
     */
    "AllowedListIp": string;
    /**
     * 实例ID。
     * @example `alikafka_pre-cn-0pp1cng20***`
     */
    "InstanceId": string;
    /**
     * 白名单描述。
     * @example `tf-testAccEcsImageConfigBasic3549descriptionChange`
     */
    "Description"?: string;
}
