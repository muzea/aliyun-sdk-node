export interface CreateOssBucketScanTaskRequest {
    /**
     * Bucket名称列表。
     */
    "BucketNameList": string[];
    /**
     * 不检测的文件后缀列表。
     */
    "ExcludeKeySuffixList"?: string[];
    /**
     * 检测模式。取值：
     * - **1**：全量文件检测。
     * - **2**：增量文件检测。
     * @example `1`
     */
    "ScanMode": number;
    /**
     * 检测的文件后缀列表。
     */
    "KeySuffixList"?: string[];
    /**
     * 文件前缀列表。
     */
    "KeyPrefixList"?: string[];
    /**
     * 是否匹配所有前缀。
     * @example `true`
     */
    "AllKeyPrefix"?: boolean;
    /**
     * 存在多个层级的压缩包嵌套时的最大解压层数，最小取值为1，最大取值为5。超过最大解压层数时，解压操作将直接结束，已解压出文件的检测不受影响。
     * @example `1`
     */
    "DecompressMaxLayer"?: number;
    /**
     * 最大解压文件数。最小取值为1，最大取值为1000。超过最大解压文件数时，解压操作将直接结束，已解压出文件的检测不受影响。
     * @example `100`
     */
    "DecompressMaxFileCount"?: number;
}
