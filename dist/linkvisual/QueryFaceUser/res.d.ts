export interface QueryFaceUserResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 错误描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回值
     */
    Data: {
        /**
         * 用户参数
         * @example `{"age":28, "sex":"male"}`
         */
        Params: string;
        /**
         * 调用者系统中的用户Id
         * @example `TestCustomUserId`
         */
        CustomUserId: string;
        /**
         * 用户名
         * @example `TestName`
         */
        Name: string;
        /**
         * 用户Id
         * @example `TestUserId`
         */
        UserId: string;
        /**
         * 人脸照片信息列表
         */
        FacePicList: {
            /**
             * 照片Url
             * @example `https://test.com/xxx.jpg`
             */
            FaceUrl: string;
            /**
             * 照片MD5值
             * @example `TestFaceMd5`
             */
            FaceMd5: string;
            /**
             * 人脸特征值列表
             */
            FeatureDTOList: {
                /**
                 * 算法名
                 * @example `TestAlgorithmName`
                 */
                AlgorithmName: string;
                /**
                 * 算法版本
                 * @example `TestAlgorithmVersion`
                 */
                AlgorithmVersion: string;
                /**
                 * 算法提供者
                 * @example `TestAlgorithmProvider`
                 */
                AlgorithmProvider: string;
                /**
                 * 错误描述
                 * @example `success`
                 */
                ErrorMessage: string;
                /**
                 * 错误码
                 * @example `200`
                 */
                ErrorCode: string;
                /**
                 * 人脸MD5
                 * @example `TestFaceMd5`
                 */
                FaceMd5: string;
            }[];
        }[];
    };
}
