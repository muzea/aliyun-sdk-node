export interface CopySnapshotRequest {
    /**
     * 该参数暂未开放使用。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 新快照的标签信息。
     */
    "Tag"?: {
        /**
         * 新快照的标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 新快照的标签值。一旦传入该值，允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 源快照所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 新快照的目标地域ID。
     * @example `us-east-1`
     */
    "DestinationRegionId": string;
    /**
     * 源快照ID。
     * @example `s-bp67acfmxazb4p****`
     */
    "SnapshotId": string;
    /**
     * 新快照的名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以http://和https:// 开头。支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 默认值：空。
     * @example `CopySnapshotDemo`
     */
    "DestinationSnapshotName": string;
    /**
     * 新快照的描述信息。长度为2~256个英文或中文字符，不能以http://或https://开头。
     * 默认值：空。
     * @example `CopySnapshotDemo`
     */
    "DestinationSnapshotDescription": string;
    /**
     * 新快照的保留时长，单位为天，到期后快照会被自动释放。取值范围：1~65536。
     * 默认值：空，表示快照不会被自动释放。
     * @example `60`
     */
    "RetentionDays"?: number;
    /**
     * 是否加密云盘。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 目标地域的KMS用户主密钥。
     * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
     */
    "KMSKeyId"?: string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     */
    "Arn"?: {
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        RoleType: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Rolearn: string;
        /**
         * >该参数暂未开放使用。
         * @example `0`
         */
        AssumeRoleFor: number;
    }[];
    /**
     * >该参数暂未开放使用。
     * @example `null`
     */
    "DestinationStorageLocationArn"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
