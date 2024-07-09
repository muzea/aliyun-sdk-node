export interface InitIMConnectResponse {
    /**
     * Id of the request
     * @example `E6988CE6-41CF-1103-9BEC-2B20D26C0B52`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回编码
     * @example `200`
     */
    Code: string;
    /**
     * 异常信息
     * @example `Parameter.Invalid`
     */
    Message: string;
    /**
     * im连接信息
     * @example `{     "imDomain": "im.alimebot.com",     "appKey": "WDg2VfNv",     "token": "QUM4SndaY3VPMjhkQldDZUNOR0ZaTmZ5R3NBY0FKWHJ4OGc4dERZbEJzcjNIKzFiS1RyTjhXRUpBYmVpQlpsakprNDRFVkdxcy9HWVk2RXZvalU3bHhxRkJlc1NBUXZwdHFKOTE2UTNwamQ4b1U4N3dEbmhyRjc4R2hOQStvMnMrYkV2dlVpSHNvWC96SEVNZWRqMjBuMXdjNklpamJzaDNWYllnUldDZGhJPQ=="   }`
     */
    Data: string;
}
