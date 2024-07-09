export interface DescribeCloudResourceStatusResponse {
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * 云服务供应商。
         * @example `aliyun`
         */
        CloudName: string;
        /**
         * 云产品。
         * @example `OSS`
         */
        CloudProduct: string;
        /**
         * 部署证书的云产品资源总数。
         * @example `2`
         */
        TotalCount: number;
    }[];
    /**
     * 本次请求的ID。
     * @example `09470F19-CEE8-5C63-BF2C-02B5E3F07A17`
     */
    RequestId: string;
}
