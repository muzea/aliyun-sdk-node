export interface CreateSnapshotRequest {
    /**
     * 云盘ID。
     * @example `d-bp1s5fnvk4gn2tws0****`
     */
    "DiskId": string;
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 为防止和自动快照的名称冲突，不能以`auto`开头。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放，取值范围：1~65536。
     * 默认值：空，表示快照不会被自动释放。
     * @example `30`
     */
    "RetentionDays"?: number;
    /**
     * 快照类型。取值范围：
     * - Standard：普通快照。
     * - Flash：本地快照。
     * >该参数即将被弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `Standard`
     */
    "Category"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 快照所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否开启快照极速可用功能。取值范围：
     * - true：开启。仅ESSD云盘支持开启该功能。
     * - false：关闭。即创建普通快照。
     * 默认值：false。
     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `false`
     */
    "InstantAccess"?: boolean;
    /**
     * 设置快照极速可用功能的保留时间，保留时间到期后快照将自动释放。该参数在`InstantAccess=true`时生效。单位：天。取值范围：1~65535。
     * 默认与参数`RetentionDays`的值一致。
     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `1`
     */
    "InstantAccessRetentionDays"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 快照的标签键。
         * >  为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `null`
         */
        key: string;
        /**
         * 快照的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 快照的标签值。
         * >  为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `null`
         */
        value: string;
    }[];
    /**
     * > 该参数暂未开放使用。
     * @example `null`
     */
    "StorageLocationArn"?: string;
}
