export interface ClearFaceDeviceDBResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用成功时，返回空值，表示该V系列边缘一体机指定隔离ID下的人脸底库已清空。
     * @example `""`
     */
    Data: any;
    /**
     * 调用失败时，返回的出错信息。
     * @example `device not found`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
