export interface SearchFaceResponse {
    /**
     * 请求ID。
     * @example `4159e64a-0fe8-436c-a8de-ee531555db3c`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 匹配的结果列表，如果输入图像中多个人脸，则这里会返回多个数据。
         */
        MatchList: {
            /**
             * 匹配的人脸数据列表。
             */
            FaceItems: {
                /**
                 * 实体ID，用来标识用户的唯一性，如用户ID、员工ID等。每个实体可包含多张人脸图片。支持大小写字母、数字、下划线和减号的组合，长度为2~64。
                 * @example `U1`
                 */
                EntityId: string;
                /**
                 * 人脸图片数据ID，需要全局唯一，不可重复。支持小写字母、数字和下划线的组合。长度为1~64。
                 * @example `001`
                 */
                FaceId: string;
                /**
                 * 人脸的相似度，取值范围-1.0~1.0，取小数点后6位，数值越大相似度越高。建议的三个参考阈值为0.35，0.45和0.6，分别对应千分之一，万分之一和十万分之一的误识率。阈值设置越高，误识率越低，通过率也越低，对安全性要求越高的场合，可以设置越高的阈值。
                 * @example `0.892133`
                 */
                Score: number;
                /**
                 * 自定义信息（字符串）。支持字母、数字、标点符号和汉字。不超过512个字符。
                 * @example `王小二`
                 */
                ExtraData: string;
                /**
                 * 数据库名称。
                 * @example `default`
                 */
                DbName: string;
                /**
                 * 转换后的置信度 ，取值范围0.0~100.0，数值越大相似度越高，建议的三个参考阈值为60.48，67.87和72.62，分别对应千分之一，万分之一和十万分之一的误识率，阈值设置越高，误识率越低，通过率也越低，对安全性要求越高的场合，可以设置越高的阈值。
                 * @example `36.820168`
                 */
                Confidence: number;
            }[];
            /**
             * 输入图像中的人脸坐标信息。
             */
            Location: {
                /**
                 * 宽度，单位像素。
                 * @example `200`
                 */
                Width: number;
                /**
                 * 高度，单位像素。
                 * @example `200`
                 */
                Height: number;
                /**
                 * 左上角y坐标。
                 * @example `6`
                 */
                Y: number;
                /**
                 * 左上角x坐标。
                 * @example `5`
                 */
                X: number;
            };
            /**
             * 输入图像中的人脸质量分。
             * @example `71.7349`
             */
            QualitieScore: number;
        }[];
    };
}
