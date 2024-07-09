export interface GetStandardRoomJumpUrlResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 调用获取低代码服务跳转链接的接口返回结果。
     */
    Result: {
        /**
         * 低代码服务跳转协议地址。
         * @example `http://xxx.com/standard_live?appId=l***u&userId=jm6&userAuthSession=0c179505-6d14-**-88a888d849ec&roomId=b807bd2a-**-96e1-c5753f13a5eb&appKey=63***3d&callback=https%3A%2F%2Fxxx.com%2Fapi%2Flogin%2FcheckUserAuthSession`
         */
        StandardRoomJumpUrl: string;
    };
}
