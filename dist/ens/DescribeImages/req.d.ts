export interface DescribeImagesRequest {
    /**
     * ENS节点ID。
     * @example `cn-dalian-unicom`
     */
    "EnsRegionId"?: string;
    /**
     * 镜像ID，仅支持传单个ID。
     * 支持自定义镜像和公共镜像。
     * @example `m-5qm2r6xo7njrpdkx04q1o****`
     */
    "ImageId"?: string;
    /**
     * 此参数暂不使用。
     * @example `此参数暂不使用。`
     */
    "Status"?: string;
    /**
     * 自定义镜像的名称。长度为2~128个字符。必须以大小字母或中文开头，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空，表示保持原有名称不变。
     * @example `centos_6_08_64_20G_a****`
     */
    "ImageName"?: string;
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数，最大值为**50**行。
     * 默认值：**10**。
     * @example `50`
     */
    "PageSize"?: string;
    /**
     * 快照ID。
     * @example `mock-clone_snapshot_id`
     */
    "SnapshotId"?: string;
}
