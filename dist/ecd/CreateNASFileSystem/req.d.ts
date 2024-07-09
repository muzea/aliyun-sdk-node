export interface CreateNASFileSystemRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * NAS文件系统名称。
     * 文件名称需遵循以下规则：
     * 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、下划线（_）或者短划线（-）。
     * @example `testNAS`
     */
    "Name"?: string;
    /**
     * NAS文件系统描述。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * NAS文件系统的存储规格类型。取值范围：
     * - Capacity：容量型。
     * - Performance：性能型。
     * 默认值：Capacity
     * @example `Capacity`
     */
    "StorageType"?: string;
    /**
     * 文件系统是否加密。使用KMS服务托管密钥，对文件系统落盘数据进行加密存储。在读写加密数据时，无需解密。可选值及其含义：
     * - 0：不加密。
     * - 1：使用NAS托管密钥进行加密。
     * 默认值：0
     * @example `0`
     */
    "EncryptType"?: string;
}
