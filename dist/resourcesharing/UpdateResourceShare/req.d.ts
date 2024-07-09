export interface UpdateResourceShareRequest {
    /**
     * 共享单元ID。
     * @example `rs-qSkW1HBY****`
     */
    "ResourceShareId": string;
    /**
     * 新的共享单元名称。
     * 长度范围：1~50个字符。
     * 格式：允许输入英文字母、数字、中文、英文句点（.）、下划线（_）或短划线（-）。
     * @example `new`
     */
    "ResourceShareName": string;
    /**
     * 是否允许共享给资源目录外的账号。取值：
     * - false：仅允许资源目录内共享。
     * - true：允许共享给任意账号。
     * @example `false`
     */
    "AllowExternalTargets"?: boolean;
}
