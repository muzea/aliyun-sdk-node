export interface CreateApplicationResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `BFD4C1BA-897D-4306-A79D-4D20D7E*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
    /**
     * 应用信息
     */
    Application: {
        /**
         * 应用创建者
         * @example `userName`
         */
        CreateUsername: string;
        /**
         * 应用名称
         * @example `newApplication`
         */
        AppName: string;
        /**
         * 应用上次更新时间
         * @example `1562333864469`
         */
        UpdateTime: number;
        /**
         * 应用上次更新者
         * @example `userName`
         */
        UpdateUsername: string;
        /**
         * 应用创建时间
         * @example `1562333864469`
         */
        CreateTime: number;
        /**
         * 应用ID
         * @example `wa-5d3ea7cf2977ca5251e*****`
         */
        AppId: string;
        /**
         * 应用类型
         * @example `Java`
         */
        CategoryName: string;
        /**
         * 是否使用共享OSS存储
         * @example `true`
         */
        UsingSharedStorage: boolean;
        /**
         * 应用描述信息
         * @example `This is an application`
         */
        AppDescription: string;
    };
}
