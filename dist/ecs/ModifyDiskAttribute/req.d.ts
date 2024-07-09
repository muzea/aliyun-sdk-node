export interface ModifyDiskAttributeRequest {
    /**
     * 待修改明细的磁盘ID。
     * > `DiskId`和`DiskIds.N`两个参数不能同时被调用，请您根据需求任选其一传值。
     * @example `d-bp1famypsnar20bv****`
     */
    "DiskId"?: string;
    /**
     * 磁盘名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `MyDiskName`
     */
    "DiskName"?: string;
    /**
     * 磁盘描述。 长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     *
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * 磁盘是否随实例释放。默认值：无，无表示不改变当前的值。
     * <props="china">开启多重挂载特性的云盘，不支持设置该参数。</props>
     * 在下列两种情况下，将参数`DeleteWithInstance`设置成`false`时会报错。
     *
     * - 磁盘的种类（category）为本地盘（ephemeral）时。
     * - 磁盘的种类（category）为普通云盘（cloud），且不可以卸载（Portable=false）时。
     * @example `false`
     */
    "DeleteWithInstance"?: boolean;
    /**
     * 删除磁盘时，是否同时删除其自动快照。默认值：无，无表示不改变当前的值。
     * @example `false`
     */
    "DeleteAutoSnapshot"?: boolean;
    /**
     * 云盘是否启用自动快照策略功能。取值范围：
     * - true：启用。
     * - false：关闭。
     * 默认值：无，表示不改变当前的值。
     * > 创建后的云盘默认启用自动快照策略功能。您只需要为云盘绑定自动快照策略即可正常使用。
     * @example `true`
     */
    "EnableAutoSnapshot"?: boolean;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 待修改明细的多个磁盘ID。N的取值范围为0 ~ 100。
     * > `DiskId`和`DiskIds.N`两个参数不能同时被调用，请您根据需求任选其一传值。
     * @example `d-bp1famypsnar20bv****`
     */
    "DiskIds"?: string[];
    /**
     * 是否开启Burst（性能突发）。取值范围：
     * - true：是。
     * - false：否。
     * @example `false`
     */
    "BurstingEnabled"?: boolean;
}
