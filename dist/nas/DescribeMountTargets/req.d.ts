export interface DescribeMountTargetsRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：31a8e4\*\*\*\*。
     * - 极速型NAS：必须以`extreme-`开头，例如extreme-0015\*\*\*\*。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * > 仅中国站支持CPFS文件系统。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 挂载点地址。
     * @example `1ca404a666-x****.cn-hangzhou.nas.aliyuncs.com`
     */
    "MountTargetDomain"?: string;
    /**
     * 每个分页包含的挂载点个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * IPv4和IPv6双栈挂载点。
     * > 当前仅极速型NAS中国内地各地域支持IPv6功能。
     * @example `174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com`
     */
    "DualStackMountTargetDomain"?: string;
}
