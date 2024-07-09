export interface ListFunctionDeploymentResponse {
    /**
     * 请求ID。
     * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Paginator: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        Total: number;
        /**
         * 当前页面总数。
         * @example `1`
         */
        PageCount: number;
    };
    /**
     * 函数数据列表。
     */
    DataList: {
        /**
         * 创建时间。
         * @example `2019-06-21T02:22:53.309Z`
         */
        CreatedAt: string;
        /**
         * 部署ID。
         * @example `dep-5e49fd471c9d4451c33bdd06`
         */
        DeploymentId: string;
        /**
         * 下载地址。
         * @example `http://function-apiserver-test.oss-cn-shanghai.aliyuncs.com/5d0afc0e1c9d44*****32c30a-v5.zip?OSSAccessKeyId=LTA************&Expires=1561425220&Signature=SAgUkZFK54eAbU6TLT9zMZ7S8eg%3D`
         */
        DownloadSignedUrl: string;
        /**
         * 版本号。
         * @example `2019061110511930090`
         */
        VersionNo: string;
        /**
         * 修改时间。
         * @example `2019-06-21T02:22:55.996Z`
         */
        ModifiedAt: string;
        /**
         * 状态。
         */
        Status: {
            /**
             * 状态。
             * @example `DEPLOY_SUCCESS`
             */
            Status: string;
            /**
             * 状态描述。
             * @example `部署成功`
             */
            Label: string;
        };
    }[];
}
