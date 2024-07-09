export interface ListSnapshotLinksRequest {
    /**
     * 所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页条数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询快照链时的筛选键。
     * 与FilterValue配合使用，取值必须为LinkId或FsId。
     * 传入LinkId则根据快照链ID进行筛选，传入FsId则根据文件系统ID进行筛选。
     * @example `FsId`
     */
    "FilterKey"?: string;
    /**
     * 查询快照链时的筛选值。
     * 与FilterKey配合使用。
     * @example `dbfs-kwziq4dpsle********`
     */
    "FilterValue"?: string;
    /**
     * 数据库文件系统ID。一次最多指定100个文件系统ID。FsIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。
     * @example `["dbfs-kwziq4dpsle********","dbfs-vuaqvfcjqsg********"]`
     */
    "FsIds"?: string;
    /**
     * 快照链ID。一次最多指定100个快照ID。LinkIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。
     * @example `["sl-bp1grgphbcc9brb5****","sl-bp1c4izumvq0i5bs****","sl-bp1akk7isz866dds****"]`
     */
    "LinkIds"?: string;
}
