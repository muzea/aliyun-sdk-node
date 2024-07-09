export interface IdDetectOcrCompareFacesResponse {
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
         * 人证比对结果。
         */
        CompareResult: {
            /**
             * 错误码，服务执行成功时返回“0”。
             * @example `0`
             */
            Code: string;
            /**
             * 人证比对结果。
             */
            CompareResultData: {
                /**
                 * 人脸匹配结果。
                 * @example `examine`
                 */
                Match: string;
                /**
                 * 人证比对风险信息。
                 */
                Risks: string[];
                /**
                 * 人脸相似度得分，范围：[0.0, 100.0]，越高则代表越相似。
                 * @example `99.73`
                 */
                Score: number;
            };
            /**
             * 错误信息描述。
             * @example `null`
             */
            Message: string;
        };
        /**
         * 证件类型检测及防伪识别结果。
         */
        IdDetectResult: {
            /**
             * 错误码，服务执行成功时返回“0”。
             * @example `0`
             */
            Code: string;
            /**
             * 证件类型检测及防伪识别结果。
             */
            IdDetectResultData: {
                /**
                 * 卡证照片防伪识别结果。
                 */
                AntiSpoofingResult: {
                    /**
                     * 是否通过防伪检测。
                     * @example `false`
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
                 * 证件类型检测结果。
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
                /**
                 * 警告信息，不影响Passed结果，仅作为参考信息。
                 */
                Warning: string[];
            };
            /**
             * 错误信息描述。
             * @example `null`
             */
            Message: string;
        };
        /**
         * 证件OCR结果。
         */
        OcrResult: {
            /**
             * 错误码，服务执行成功时返回“0”。
             * @example `0`
             */
            Code: string;
            /**
             * 证件OCR结果。
             */
            OcrResultData: {
                /**
                 * 地址。
                 * @example `null`
                 */
                Address: string;
                /**
                 * Address字段识别的置信度。
                 * @example `0.92`
                 */
                AddressConfidence: number;
                /**
                 * Address字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                AddressPosition: number[];
                /**
                 * 出生日期。
                 * @example `2009-01-16`
                 */
                DateOfBirth: string;
                /**
                 * DateOfBirth字段识别的置信度。
                 * @example `0.92`
                 */
                DateOfBirthConfidence: number;
                /**
                 * DateOfBirth字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                DateOfBirthPosition: number[];
                /**
                 * 证件号。
                 * @example `null`
                 */
                DocumentNumber: string;
                /**
                 * 证件副号。
                 * @example `null`
                 */
                DocumentNumber2: string;
                /**
                 * DocumentNumber2字段识别的置信度。
                 * @example `0.92`
                 */
                DocumentNumber2Confidence: number;
                /**
                 * DocumentNumber2字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                DocumentNumber2Position: number[];
                /**
                 * DocumentNumber字段识别的置信度。
                 * @example `0.92`
                 */
                DocumentNumberConfidence: number;
                /**
                 * DocumentNumber字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                DocumentNumberPosition: number[];
                /**
                 * 证件有效期。
                 * @example `2027.01.16`
                 */
                ExpirationDate: string;
                /**
                 * ExpirationDate字段识别的置信度。
                 * @example `0.92`
                 */
                ExpirationDateConfidence: number;
                /**
                 * ExpirationDate字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                ExpirationDatePosition: number[];
                /**
                 * 名字。
                 * @example `null`
                 */
                FirstName: string;
                /**
                 * FirstName字段识别的置信度。
                 * @example `0.92`
                 */
                FirstNameConfidence: number;
                /**
                 * FirstName字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                FirstNamePosition: number[];
                /**
                 * 全名。
                 * @example `null`
                 */
                FullName: string;
                /**
                 * FullName字段识别的置信度。
                 * @example `0.92`
                 */
                FullNameConfidence: number;
                /**
                 * FullName字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                FullNamePosition: number[];
                /**
                 * 签发日期。
                 * @example `Jan 01 2023`
                 */
                IssuedDate: string;
                /**
                 * IssuedDate字段识别的置信度。
                 * @example `0.92`
                 */
                IssuedDateConfidence: number;
                /**
                 * IssuedDate字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                IssuedDatePosition: number[];
                /**
                 * 签发机构名称。
                 * @example `null`
                 */
                IssuingAuthority: string;
                /**
                 * IssuingAuthority字段识别的置信度。
                 * @example `0.92`
                 */
                IssuingAuthorityConfidence: number;
                /**
                 * IssuingAuthority字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                IssuingAuthorityPosition: number[];
                /**
                 * 姓氏。
                 * @example `null`
                 */
                LastName: string;
                /**
                 * LastName字段识别的置信度。
                 * @example `0.92`
                 */
                LastNameConfidence: number;
                /**
                 * LastName字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                LastNamePosition: number[];
                /**
                 * 证件上的国家/地区代码。
                 * @example `JP`
                 */
                NationalityCode: string;
                /**
                 * NationalityCode字段识别的置信度。
                 * @example `0.92`
                 */
                NationalityCodeConfidence: number;
                /**
                 * NationalityCode字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                NationalityCodePosition: number[];
                /**
                 * 格式化后的出生日期（格式: YYYY/MM/dd）
                 * @example `2009/01/16`
                 */
                NormalizedDateOfBirth: string;
                /**
                 * 格式化后的失效时间（格式: YYYY/MM/dd）
                 * @example `2027/01/16`
                 */
                NormalizedExpirationDate: string;
                /**
                 * 格式化后的签发日期（格式: YYYY/MM/dd）
                 * @example `2023/01/16`
                 */
                NormalizedIssuedDate: string;
                /**
                 * 格式化后的国家/地区代码，遵循Alpha-3 code(ISO 3166)规则。
                 * @example `JPN`
                 */
                NormalizedNationalityCode: string;
                /**
                 * 格式化后的性别。
                 * @example `M`
                 */
                NormalizedSex: string;
                /**
                 * 性别。
                 * @example `Male`
                 */
                Sex: string;
                /**
                 * Sex字段识别的置信度。
                 * @example `0.92`
                 */
                SexConfidence: number;
                /**
                 * Sex字段区域的4点坐标，从字段的左上开始顺时针，左上、右上、右下、左下的坐标。
                 */
                SexPosition: number[];
            };
            /**
             * 错误信息描述。
             * @example `null`
             */
            Message: string;
        };
        /**
         * 人脸去重返回结果。
         */
        UnrepeatResult: {
            /**
             * 证件上的人脸去重结果。
             */
            CardImageResult: {
                /**
                 * 错误码，服务执行成功时返回“0”。
                 * @example `0`
                 */
                Code: string;
                /**
                 * 证件上的人脸去重结果。
                 */
                CardImageResultData: {
                    /**
                     * 命中的人脸数据库名称。
                     * @example `cardFace`
                     */
                    Dbname: string;
                    /**
                     * 数据库中的ID。
                     * @example `990614535008`
                     */
                    EntityId: string;
                    /**
                     * 额外信息。
                     * @example `null`
                     */
                    ExtraData: string;
                    /**
                     * 人脸相似度得分，范围：[0.0, 100.0]，越高则代表越相似。
                     * @example `99.72`
                     */
                    Score: number;
                };
                /**
                 * 错误信息描述。
                 * @example `null`
                 */
                Message: string;
            };
            /**
             * 自拍照人脸去重结果。
             */
            PortraitImageResult: {
                /**
                 * 错误码，服务执行成功时返回“0”。
                 * @example `0`
                 */
                Code: string;
                /**
                 * 自拍照人脸去重结果。
                 */
                PortraitImageResultData: {
                    /**
                     * 命中的人脸数据库名称。
                     * @example `cardFace`
                     */
                    Dbname: string;
                    /**
                     * 数据库中的ID。
                     * @example `990614535008`
                     */
                    EntityId: string;
                    /**
                     * 额外信息。
                     * @example `null`
                     */
                    ExtraData: string;
                    /**
                     * 人脸相似度得分，范围：[0.0, 100.0]，越高则代表越相似。
                     * @example `99.72`
                     */
                    Score: number;
                };
                /**
                 * 错误信息描述。
                 * @example `null`
                 */
                Message: string;
            };
        };
        /**
         * 人脸活体检测返回结果。
         */
        LivenessResult: {
            /**
             * 错误码，服务执行成功时返回“0”。
             * @example `0`
             */
            Code: string;
            /**
             * 错误信息描述。
             * @example `null`
             */
            Message: string;
            /**
             * 人脸活体检测结果。
             */
            LivenessResultData: {
                /**
                 * 人脸活体检测得分，范围：[0.0, 100.0]，越低表示越可能是真人照片。
                 * @example `0.05`
                 */
                Score: number;
                /**
                 * 活体检测判定结果，true/false，代表是否通过。
                 * @example `true`
                 */
                Liveness: string;
                /**
                 * 人脸活体检测风险信息。
                 */
                Risks: string[];
            };
        };
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
