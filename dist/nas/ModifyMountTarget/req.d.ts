export interface ModifyMountTargetRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：`31a8e4****`。
     * - 极速型NAS：必须以`extreme-`开头，例如`extreme-0015****`。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * IPv4挂载点。
     * @example `1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com`
     */
    "MountTargetDomain"?: string;
    /**
     * 挂载点绑定的权限组。
     * @example `classic-test`
     */
    "AccessGroupName"?: string;
    /**
     * 挂载点状态。
     * 取值：
     * - Active：可用
     * - Inactive：不可用
     * > 当前仅通用型NAS支持更改挂载点状态。
     * @example `Inactive`
     */
    "Status"?: string;
    /**
     * IPv4和IPv6双栈挂载点。
     * > 当前仅极速型NAS中国内地各地域支持IPv6功能。
     * @example `174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com`
     */
    "DualStackMountTargetDomain"?: string;
}
