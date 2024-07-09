export interface InitIMConnectRequest {
    /**
     * B端渠道配置中生成的From值
     * @example `8XNBzDucJv`
     */
    "From": string;
    /**
     * 通过GenerateUserAccessToken接口获取的用户token数据，不填时默认访客接入；
     * @example `QUM4SndaY3VPMjhkQldDZUNOR0ZaTmZ5R3NBY0FKWHJ4OGc4dERZbEJzcjNIKzFiS1RyTjhXRUpBYmVpQlpsakprNDRFVkdxcy9HWVk2RXZvalU3bHhxRkJlc1NBUXZwdHFKOTE2UTNwamQ4b1U4N3dEbmhyRjc4R2hOQStvMnMrYkV2dlVpSHNvWC96SEVNZWRqMjBuMXdjNklpamJzaDNWYllnUldDZGhJPQ==`
     */
    "UserAccessToken"?: string;
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
