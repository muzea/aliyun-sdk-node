export interface ScanDocumentResponse {
    /**
     * 请求ID
     * @example `4D93120B-9A81-11F5-8307-B746390C644D`
     */
    RequestId: string;
    /**
     * 返回结果数据。
     */
    Data: {
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
         * @example `Jan 16 2023`
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
