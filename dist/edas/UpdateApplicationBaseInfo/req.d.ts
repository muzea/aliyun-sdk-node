export interface UpdateApplicationBaseInfoRequest {
    /**
     * 应用ID。
     * @example `c627c157-560d-43ff-****-************`
     */
    "AppId": string;
    /**
     * 应用名称必须以字母开头，允许数字、字母、下划线（_）以及短划线（-）组合，最多支持36个字符。
     * @example `hello-edas`
     */
    "AppName"?: string;
    /**
     * 描述信息，最多支持256个字符。
     * @example `测试应用`
     */
    "Desc"?: string;
    /**
     * 应用负责人，最大长度为127个字符。
     * @example `test@aliyun_xxx.com`
     */
    "Owner"?: string;
}
