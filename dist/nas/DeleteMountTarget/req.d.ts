export interface DeleteMountTargetRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：31a8e4\*\*\*\*。
     * - 极速型NAS：必须以`extreme-`开头，例如extreme-0015\*\*\*\*。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * > 仅中国站支持CPFS文件系统。
     * @example `174494****`
     */
    "FileSystemId": string;
    /**
     * 挂载点。
     * @example `174494b666-x****.cn-hangzhou.nas.aliyuncs.com`
     */
    "MountTargetDomain": string;
}
