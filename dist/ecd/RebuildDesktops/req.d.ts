export interface RebuildDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。可设置1~20个。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId": string[];
    /**
     * 变更后要使用的新镜像ID。
     * @example `m-84mztzatmlnys****`
     */
    "ImageId"?: string;
    /**
     * 操作数据盘类型。
     * > 不论云电脑是否有数据盘，调用此接口默认都是不传入任何字段值。
     * - 若云电脑无数据盘：
     *         传入任何字段都不会进行数据盘操作。
     * - 若云电脑包含数据盘：
     *     1. 当云电脑操作系统和目标镜像操作系统相同时：
     *         -  传入字段为`replace`时，替换云电脑的数据盘。
     *         -  不传入任何字段时，保留云电脑原来的数据盘。
     *     2. 当云电脑操作系统和目标镜像操作系统不同时：
     *         - 传入字段为`replace`时，替换云电脑的数据盘。
     *         - 不传入任何字段时，清空云电脑数据盘。
     * @example `replace`
     */
    "OperateType"?: string;
    "Language"?: string;
}
