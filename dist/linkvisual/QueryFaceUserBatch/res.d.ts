export interface QueryFaceUserBatchResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `face user not exist`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 自定义的用户参数。
         * @example `{"key1":"value1", "key2":"value2"}`
         */
        Params: string;
        /**
         * 用户身份识别ID。
         * @example `1234567890`
         */
        CustomUserId: string;
        /**
         * 用户创建人脸数据的13位时间戳，单位为毫秒。
         * @example `1636427314000`
         */
        CreateTime: number;
        /**
         * 用户ID。
         * @example `3mtjaqebeq4d****`
         */
        UserId: string;
        /**
         * 用户名。
         * @example `Tony`
         */
        Name: string;
        /**
         * 用户最后一次修改人脸数据的13位时间戳，单位为毫秒。
         * @example `1636436864000`
         */
        ModifyTime: number;
        /**
         * 用户的人脸图片信息列表。
         */
        FacePicList: {
            /**
             * 用户的人脸图片URL地址。
             * @example `https://example.com/test.jpeg`
             */
            FaceUrl: string;
            /**
             * 用户人脸图片的MD5值。
             * @example `TestFaceMd5`
             */
            FaceMd5: string;
            /**
             * 人脸特征值列表。
             */
            FeatureDTOList: {
                /**
                 * 算法名。
                 * @example `TestAlgorithmName`
                 */
                AlgorithmName: string;
                /**
                 * 算法版本。
                 * @example `TestAlgorithmVersion`
                 */
                AlgorithmVersion: string;
                /**
                 * 算法提供者。
                 * @example `TestAlgorithmProvider`
                 */
                AlgorithmProvider: string;
                /**
                 * 算法执行出错时，返回的错误信息。
                 * @example `parameter error`
                 */
                ErrorMessage: string;
                /**
                 * 算法返回码：
                 * - **200**：表示成功。
                 * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
                 * @example `200`
                 */
                ErrorCode: string;
                /**
                 * 人脸特征的MD5值。
                 * @example `TestFaceMd5`
                 */
                FaceMd5: string;
            }[];
        }[];
    }[];
}
