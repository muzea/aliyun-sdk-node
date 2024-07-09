export interface AddFaceUserRequest {
    /**
     * 业务隔离ID，用于同一个阿里云账号下不同业务应用之间的数据隔离，支持英文大小写字母、数字。
     * 例如，您在A地区和B地区，均有人脸识别业务，那么可设置不同的业务隔离ID，区分A、B地区的人脸识别业务。
     * ><notice>
     * 请妥善保存业务隔离ID值，以便后续调用此业务隔离区其它接口时使用。
     * ></notice>
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户的人脸图片URL下载地址，目前仅支持JPEG和JPG格式的图片，且图片URL不能包含中文。
     * @example `https://example.com/test.jpeg`
     */
    "FacePicUrl": string;
    /**
     * 用户身份识别ID，支持英文大写字母和数字。
     * 建议您设置为该用户的身份证号、学号等。
     * @example `1234567890`
     */
    "CustomUserId": string;
    /**
     * 用户名。支持中文、英文字母大小写、数字、下划线（_）和短划线（-），长度不超过64个字符。
     * @example `Tony`
     */
    "Name"?: string;
    /**
     * 用户参数，请自定义。
     * @example `{"key1":"value1", "key2":"value2"}`
     */
    "Params"?: string;
}
