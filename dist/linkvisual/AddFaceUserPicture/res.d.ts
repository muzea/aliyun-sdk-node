export interface AddFaceUserPictureResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用成功时，返回的用户人脸图片唯一标识符。
     * > 在人脸底库服务的其它接口调用中，会使用人脸图片唯一标识符，请妥善保存。
     * @example `1bb580ef7****`
     */
    Data: any;
    /**
     * 调用失败时，返回的出错信息。
     * @example `face user not exist`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4de2c367-c1db-417c-aa15-8c585e595d92`
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
