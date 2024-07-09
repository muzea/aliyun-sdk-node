export interface CreateSnapshotGroupRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-j6ca469urv8ei629****`
     */
    "InstanceId"?: string;
    /**
     * 是否开启快照极速可用。取值范围：
     * - true：开启。
     * - false：关闭。
     * 默认值：false。
     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `false`
     */
    "InstantAccess"?: boolean;
    /**
     * 设置快照极速可用的使用时间。单位：天，取值范围：1~65535。
     * 仅当`InstantAccess=true`时，该参数生效。到期后自动关闭快照极速使用功能。
     * 默认值：空，表示和快照释放时间一致。
     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `1`
     */
    "InstantAccessRetentionDays"?: number;
    /**
     * 快照一致性组名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头，可以包含数字、半角句号（.）、下划线（_）、短划线（-）或者半角冒号（:）。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 描述。长度为2～256个字符，不能以`http://`或`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * >该参数暂未开发使用。
     * @example `null`
     */
    "StorageLocationArn"?: string;
    /**
     * 实例中不需要创建快照的云盘ID。指定云盘ID后，创建的快照一致性组将不包含该云盘对应的快照。N的取值范围为1~16。
     * 默认值：空，表示为实例中的所有云盘创建快照。
     * > 该参数不可与`DiskId.N`同时设置。
     * @example `d-j6cf7l0ewidb78lq****`
     */
    "ExcludeDiskId"?: string[];
    /**
     * 指定创建快照一致性组的云盘ID。在同可用区内支持跨实例设置多个云盘ID。N的取值范围为1~16，即一个快照一致性组内最多支持设置16块总大小不超过32 TiB的云盘。
     * 您需要注意：
     * - 该参数不可与`ExcludeDiskId.N`同时设置。
     * - 如果您设置了`InstanceId`，则该参数只能设置指定实例内已挂载的云盘，不再支持设置多个跨实例的云盘ID。
     */
    "DiskId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 快照一致性组的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 快照一致性组的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 快照一致性组所属的资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
