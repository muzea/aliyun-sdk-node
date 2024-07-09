export interface CreateBundleRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。
     * @example `m-4zfb6zj728hhr****`
     */
    "ImageId": string;
    /**
     * 云电脑规格。您可以调用[DescribeBundles](~~436974~~)查询云电脑模板，从返回的`DesktopType`参数获取当前支持的云电脑规格。
     * > 非GPU镜像只能选择非GPU规格，GPU镜像只能选择GPU规格。
     * @example `eds.enterprise_office.2c4g`
     */
    "DesktopType": string;
    /**
     * 系统盘大小。单位：GiB。支持设置的系统盘大小与规格相对应。更多信息，请参见[云电脑规格概述](~~188609~~)。
     * @example `80`
     */
    "RootDiskSizeGib": number;
    /**
     * 云电脑模板名称。
     * @example `testBundleName`
     */
    "BundleName"?: string;
    /**
     * 云电脑模板描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 操作系统语言。目前只支持系统镜像。取值如下：
     * - zh-CN：简体中文
     * - zh-HK：繁体中文（香港）
     * - en-US：英文
     * - ja-JP：日文
     * @example `zh-CN`
     */
    "Language"?: string;
    /**
     * 数据盘大小列表。目前只能设置一个数据盘。
     * @example `70`
     */
    "UserDiskSizeGib": number[];
    /**
     * 系统盘的性能等级。当云电脑规格设置为图形型或者高主频时，支持设置磁盘性能等级。关于各性能等级磁盘的差异，请参见[ESSD云盘](~~122389~~)。
     * @example `PL1`
     */
    "RootDiskPerformanceLevel"?: string;
    /**
     * 数据盘的性能等级。当云电脑规格设置为图形型或者高主频时，支持设置磁盘性能等级。关于各性能等级磁盘的差异，请参见[ESSD云盘](~~122389~~)。
     * @example `PL1`
     */
    "UserDiskPerformanceLevel"?: string;
}
