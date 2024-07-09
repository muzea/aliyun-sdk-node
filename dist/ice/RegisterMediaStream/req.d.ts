export interface RegisterMediaStreamRequest {
    /**
     * 待注册的媒资在相应系统中的地址，一经注册不可更改，并与IMS的mediaId绑定。
     * \- OSS地址，支持两种格式。
     * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
     * oss://example-bucket/example.mp4 此格式默认oss region与服务接入区域一致。
     * @example `oss://***​/接口测试/900d1-b8rs8.aac`
     */
    "InputURL"?: string;
    /**
     * 媒资ID。
     * @example `5e778ec0027b71ed80a8909598506***`
     */
    "MediaId"?: string;
    /**
     * 用户自定义参数。
     * @example `{"MessageCallback":{"CallbackURL":"http://test.test.com"}, "Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
}
