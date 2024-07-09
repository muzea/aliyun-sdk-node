export interface TriggerCapturePictureResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * IPC设备拍摄图片后，为图片生成的图片ID。
     * >IPC设备成功上传图片后，图片ID生效。
     * @example `eventPicId_12****`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request forbidden`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
