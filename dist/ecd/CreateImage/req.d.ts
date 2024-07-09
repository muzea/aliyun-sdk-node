export interface CreateImageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId"?: string;
    /**
     * 镜像名称。长度为2\~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * 镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 快照ID。
     * @example `s-2zefuwk8l6ytcgd3bf4o`
     */
    "SnapshotId"?: string;
    /**
     * 此参数不开放使用。
     * @example `deprecated`
     */
    "ImageResourceType"?: string;
    /**
     * 快照ID列表。
     */
    "SnapshotIds"?: string[];
    /**
     * 是否清除用户个人数据。若设为`true`，制作的镜像会清除`C:\Users`目录下除`Administrator`、`Public`之外的其他目录的数据。
     * @example `false`
     */
    "AutoCleanUserdata"?: boolean;
    /**
     * 镜像中包含的磁盘数据。
     * @example `ALL`
     */
    "DiskType"?: string;
}
