export interface RecognizeIdentityCardResponse {
    /**
     * 请求ID。
     * @example `A6175A03-624C-1976-908D-C8BE4C547C45`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 国徽面结果。
         */
        BackResult: {
            /**
             * 有效期结束时间，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `19800101`
             */
            EndDate: string;
            /**
             * 签发机关。
             * @example `杭州市公安局`
             */
            Issue: string;
            /**
             * 有效期起始时间，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `19970101`
             */
            StartDate: string;
        };
        /**
         * 人像面结果。
         */
        FrontResult: {
            /**
             * 人脸位置。
             */
            FaceRectangle: {
                /**
                 * 人脸矩形尺寸。
                 */
                Size: {
                    /**
                     * 宽度。
                     * @example `196`
                     */
                    Width: number;
                    /**
                     * 高度。
                     * @example `243`
                     */
                    Height: number;
                };
                /**
                 * 表示矩形顺时针旋转的度数，范围-180~180。
                 * @example `0`
                 */
                Angle: number;
                /**
                 * 人脸矩形中心坐标。
                 */
                Center: {
                    /**
                     * 人脸矩形中心纵坐标。
                     * @example `225`
                     */
                    Y: number;
                    /**
                     * 人脸矩形中心横坐标。
                     * @example `667`
                     */
                    X: number;
                };
            };
            /**
             * 出生日期，格式：YYYYMMDD，例如19800101，即1980年01月01日。
             * @example `19880722`
             */
            BirthDate: string;
            /**
             * 性别。
             * @example `男`
             */
            Gender: string;
            /**
             * 地址信息。
             * @example `江苏省南京市浦口区天天小区1栋11号`
             */
            Address: string;
            /**
             * 人脸位置。通过四个顶点表示，顺序是逆时针，依次为：左下，右下，右上，左上。
             */
            FaceRectVertices: {
                /**
                 * 人脸位置纵坐标。
                 * @example `105`
                 */
                Y: number;
                /**
                 * 人脸位置横坐标。
                 * @example `569`
                 */
                X: number;
            }[];
            /**
             * 身份证区域位置。通过四个顶点表示，顺序是逆时针，依次为：左上、左下、右下、右上。
             */
            CardAreas: {
                /**
                 * 身份证区域纵坐标。
                 * @example `485`
                 */
                Y: number;
                /**
                 * 身份证区域横坐标。
                 * @example `132`
                 */
                X: number;
            }[];
            /**
             * 民族。
             * @example `汉`
             */
            Nationality: string;
            /**
             * 姓名。
             * @example `小明`
             */
            Name: string;
            /**
             * 身份证号。
             * @example `320001198807220000`
             */
            IDNumber: string;
        };
    };
}
