export interface UpdateFaceUserRequest {
    /**
     * 隔离ID。
     * <br>用于租户下不同应用之间的数据隔离。如某用户在浙江、陕西都有业务，则可以为浙江和西安的业务分别创建两个隔离ID。
     * @example `TestIsolati****`
     */
    "IsolationId": string;
    /**
     * 用户ID。
     * @example `tibce3fsgqel****`
     */
    "UserId": string;
    /**
     * 用户名。
     * @example `ZhangSan`
     */
    "Name"?: string;
    /**
     * 用户信息。
     * @example `{"age":28, "sex":"male"}`
     */
    "Params"?: string;
    /**
     * 图片URL下载地址，目前支持JPG、JPEG格式图片。
     * @example `https://test.com/test.jpg`
     */
    "FacePicUrl"?: string;
    /**
     * 该参数为调用者业务系统中，用户的唯一ID，如身份证号、学号等。
     * @example `52242819650301xxxx`
     */
    "CustomUserId"?: string;
}
