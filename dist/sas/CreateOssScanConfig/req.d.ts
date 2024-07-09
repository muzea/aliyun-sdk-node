export interface CreateOssScanConfigRequest {
    /**
     * 是否启用。取值：
     * - **1**：开启
     * - **0**：关闭
     * @example `1`
     */
    "Enable"?: number;
    /**
     * 扫描时间，数字表示一周中的第几天。
     */
    "ScanDayList"?: number[];
    /**
     * Bucket名称列表。
     */
    "BucketNameList"?: string[];
    /**
     * 检测的文件后缀列表。
     */
    "KeySuffixList"?: string[];
    /**
     * 检测开始时间，格式为HH:mm:ss。
     * @example `00:00:00`
     */
    "StartTime"?: string;
    /**
     * 检测停止时间，格式为HH:mm:ss。
     * @example `01:01:00`
     */
    "EndTime"?: string;
    /**
     * 策略名称。
     * @example `testName`
     */
    "Name"?: string;
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
