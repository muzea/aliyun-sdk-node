export interface SetDatasetUserOssPathResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `68B3B582-0FCF-16CE-8F7F-884625D8AEE7`
     */
    RequestId: string;
    /**
     * 接口返回实体。
     */
    Data: {
        /**
         * 数据集ID。
         * @example `424`
         */
        Id: number;
        /**
         * 用户指定的OSS路径。
         * @example `"oss://regen-test-bucket/yangTest/"`
         */
        OssUrl: string;
    };
}
