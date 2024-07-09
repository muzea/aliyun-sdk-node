export interface QueryEccInfoResponse {
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * ECC信息
     */
    EccInfo: {
        /**
         * VPC ID
         * @example `vpc-23727****`
         */
        VpcId: string;
        /**
         * ECC ID
         * @example `a5b9****-40b4-4d7b-9c2a-55d6c1c0****`
         */
        EccId: string;
        /**
         * ECU ID
         * @example `0d4e****-6d87-401f-ba81-13df9877****`
         */
        EcuId: string;
        /**
         * 分组ID
         * @example `57cd****-2d3b-496f-bcce-646d0a4d****`
         */
        GroupId: string;
        /**
         * 分组名
         * @example `_DEFAULT_GROUP`
         */
        GroupName: string;
        /**
         * 包版本的MD5码
         * @example `bab6****7a090e41ca9445c9b3cd****`
         */
        PackageMd5: string;
        /**
         * 应用ID
         * @example `e809****-43d7-4c6b-8e01-b0d9d1db****`
         */
        AppId: string;
        /**
         * 包版本
         * @example `20210209.153400`
         */
        PackageVersion: string;
    };
}
