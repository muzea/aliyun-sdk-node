export interface UpdateProductVersionRequest {
    /**
     * 产品版本ID。
     * @example `pv-bp15e79d26****`
     */
    "ProductVersionId": string;
    /**
     * 产品版本名称。
     * 长度为1~128个字符。
     * @example `1.0`
     */
    "ProductVersionName": string;
    /**
     * 产品版本描述。
     * 长度为1~128个字符。
     * @example `这是一个产品版本描述`
     */
    "Description"?: string;
    /**
     * 推荐信息。取值：
     * - Default（默认值）：无。
     * - Recommended：稳定版。
     * - Latest：最新版。
     * - Deprecated：将废弃。
     * @example `Default`
     */
    "Guidance"?: string;
    /**
     * 是否启用。取值：
     * - true（默认值）：启用。
     * - false：禁用。
     * @example `true`
     */
    "Active"?: boolean;
}
