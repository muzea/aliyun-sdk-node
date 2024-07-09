export interface ModifyBundleRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑模板ID。
     * @example `b-2g65ljy4291vl****`
     */
    "BundleId": string;
    /**
     * 新的镜像ID。新镜像需满足以下条件：
     * - 新镜像的状态必须为可用（Available）。
     * - 新镜像的操作系统必须与原镜像相同。
     * - 新镜像对应所需的磁盘大小不能大于原镜像。
     * - 新镜像的GPU类型必须与原镜像相同。
     * @example `m-aea3oaww001np****`
     */
    "ImageId"?: string;
    /**
     * 新的云电脑模板名称。
     * @example `newName`
     */
    "BundleName"?: string;
    /**
     * 新的云电脑模板描述。
     * @example `newDescription`
     */
    "Description"?: string;
    /**
     * 操作系统语言。目前只支持系统镜像。
     * @example `zh-CN`
     */
    "Language"?: string;
}
