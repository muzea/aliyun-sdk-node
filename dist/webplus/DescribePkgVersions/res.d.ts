export interface DescribePkgVersionsResponse {
    /**
     * 查询结果总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `9ADFCBC1-3315-4E97-B5A3-406528B*****`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    PkgVersions: {
        /**
         * 查询版本结果
         */
        PkgVersion: {
            /**
             * 部署包版本建立者
             * @example `baiji`
             */
            CreateUsername: string;
            /**
             * 应用ID，表示部署包版本所在的应用
             * @example `App1`
             */
            AppName: string;
            /**
             * 部署包版本的更新时间
             * @example `1562246822377`
             */
            UpdateTime: number;
            /**
             * 部署包版本标签
             * @example `version-demo-tmc-1.5`
             */
            PkgVersionLabel: string;
            /**
             * 部署包版本的更新时间
             * @example `1562246822377`
             */
            CreateTime: number;
            /**
             * 部署包版本的资源包
             * @example `resources/userName/versions/version-demo-tmc-1.4/webx-quickstart-tomcat-0.1.0-SNAPSHOT.war`
             */
            PackageSource: string;
            /**
             * 应用ID，表示部署包版本所在的应用
             * @example `wa-5d1d9d8c85c7f86e2ef*****`
             */
            AppId: string;
            PackageETag: string;
            /**
             * 部署包版本ID
             * @example `wp-5d244f33f314934e2ab*****`
             */
            PkgVersionId: string;
            /**
             * 部署包版本描述
             * @example `This is a package.`
             */
            PkgVersionDescription: string;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
