export interface CreateAndBindNasFileSystemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * NAS文件系统名称。
     * @example `szy-asp-upm-test`
     */
    "FileSystemName": string;
    /**
     * NAS文件系统描述。
     * @example `newDescription`
     */
    "Description"?: string;
    /**
     * NAS文件系统的存储规格类型。取值范围：
     * - Capacity：容量型
     * - Performance：性能型
     * 默认值：Capacity
     * @example `Capacity`
     */
    "StorageType": string;
    /**
     * 文件系统是否加密。使用KMS服务托管密钥，对文件系统落盘数据进行加密存储。在读写加密数据时，无需解密。可选值及其含义：
     * - 0：不加密。
     * - 1：NAS托管密钥。
     *   `当`FileSystemType`为`standard`或`extreme`时，支持NAS托管密钥。`
     * - 2：用户管理密钥。
     *   `当`FileSystemType`为`extreme`时，支持用户管理密钥。`
     * 默认值：0
     * @example `0`
     */
    "EncryptType"?: number;
    /**
     * 工作区ID。
     * @example `cn-beijing+dir-15657*****`
     */
    "OfficeSiteId": string;
    /**
     * 桌面组ID。
     * @example `dg-fh0vdzyh6rdc*****`
     */
    "DesktopGroupId": string;
    /**
     * 用户列表。
     */
    "EndUserIds"?: string[];
}
