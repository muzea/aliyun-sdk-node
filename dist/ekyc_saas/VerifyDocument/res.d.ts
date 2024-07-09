export interface VerifyDocumentResponse {
    /**
     * 请求ID。
     * @example `4D93120B-9A81-11F5-8307-B746390C644D`
     */
    RequestId: string;
    /**
     * 返回结果数据。
     */
    Data: {
        /**
         * 卡证防伪结果。
         */
        AntiSpoofingResult: {
            /**
             * 是否通过防伪检测。
             * @example `true`
             */
            Passed: boolean;
            /**
             * 命中的卡证照片伪造风险。
             */
            Risks: string[];
        };
        /**
         * 检测到的卡证国家/地区缩写，遵循Alpha-3 code(ISO 3166)规则。
         * @example `JPN`
         */
        CountryCode: string;
        /**
         * 卡证类型检测结果。
         */
        DetectionResult: {
            /**
             * 图片内卡证坐标区域；
             * 格式为[x1,y1,x2,y2,x3,y3,x4,y4]，分别为卡片四个顶点的坐标（xi,yi) ，左上角、右上角、右下角、左下角；
             * 当图像中有多个卡片，只取区域面积最大的卡片。
             */
            CardRectangle: number[];
            /**
             * 卡证正面图片高度，单位：像素。
             * @example `382`
             */
            Height: number;
            /**
             * 图片内卡证的证件照坐标区域；
             * 格式为[x1,y1,x2,y2,x3,y3,x4,y4]，分别为卡片四个顶点的坐标（xi,yi) ，左上角、右上角、右下角、左下角。
             */
            PortraitRectangle: number[];
            /**
             * 卡证正面图片宽度，单位：像素。
             * @example `600`
             */
            Width: number;
        };
        /**
         * 检测到的卡证类型。
         * @example `IDENTITY_CARD`
         */
        DocumentType: string;
        /**
         * 是否通过卡证检测及防伪识别。
         * @example `true`
         */
        Passed: boolean;
    };
    /**
     * 错误信息描述。
     * @example `null`
     */
    Message: string;
    /**
     * 错误码，服务执行成功时返回“0”。
     * @example `0`
     */
    Code: string;
    /**
     * 服务执行状态。
     * @example `SUCCESS`
     */
    Status: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
    /**
     * 是否成功。
     * @example `true`
     */
    Ok: boolean;
}
