export interface BatchAddFacesResponse {
    /**
     * 请求ID。
     * @example `C46A46D0-3263-181A-A1EE-0901E4595390`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 添加成功的记录结果。
         */
        InsertedFaces: {
            /**
             * 人脸图像地址，与输入的ImageUrl相同，用来标记图像记录。
             * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/xxxx.png`
             */
            ImageURL: string;
            /**
             * 输出人脸ID。
             * @example `16350536`
             */
            FaceId: string;
            /**
             * 输入图像中的人脸质量分。
             * @example `99.79581`
             */
            QualitieScore: number;
        }[];
        /**
         * 添加失败的记录结果。
         */
        FailedFaces: {
            /**
             * 人脸图像地址，与输入的ImageUrl相同，用来标记图像记录。
             * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/demo/xxxx.png`
             */
            ImageURL: string;
            /**
             * 错误码。
             * @example `ClientError.IllegalArgument`
             */
            Code: string;
            /**
             * 错误信息。
             * @example `not found the db=test`
             */
            Message: string;
        }[];
    };
}
