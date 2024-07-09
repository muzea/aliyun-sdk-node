export interface DescribeStorageResponse {
    /**
     * 存储描述信息
     */
    Storage: {
        /**
         * 存储最后更新时间
         * @example `1560410804957`
         */
        UpdateTime: number;
        /**
         * 存储路径前缀
         * @example `pkgTemp`
         */
        KeyPrefix: string;
        /**
         * 存储路径用户uid前缀md5
         * @example `f29a318c780**********3ec19ece615`
         */
        PkgKeyPrefix: string;
        /**
         * 存储创建时间
         * @example `1560410804957`
         */
        CreateTime: number;
        /**
         * 存储的bucket名称
         * @example `webplus-cn-shenzhen-s-5d01fab421e*****121*****`
         */
        BucketName: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `49C3DE38-ABA2-4369-BED2-CBD1D**********`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
