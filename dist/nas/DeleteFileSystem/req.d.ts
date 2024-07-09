export interface DeleteFileSystemRequest {
    /**
     * 待删除的文件系统ID。
     * - 通用型NAS：31a8e4\*\*\*\*。
     * - 极速型NAS：必须以`extreme-`开头，例如extreme-0015\*\*\*\*。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-00cb6fa094ca\*\*\*\*。
     * > 仅中国站支持CPFS文件系统。
     * @example `1ca404****`
     */
    "FileSystemId": string;
}
