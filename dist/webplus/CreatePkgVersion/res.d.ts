export interface CreatePkgVersionResponse {
    /**
     * 响应消息，若成功请求为success。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `14A65FB3-DFD6-4D9A-83EA-9259C2D*****`
     */
    RequestId: string;
    /**
     * 部署包版本信息
     */
    PkgVersion: {
        /**
         * 应用名称
         * @example `app1`
         */
        AppName: string;
        /**
         * 上次更新时间
         * @example `1564388159130`
         */
        UpdateTime: number;
        /**
         * 部署包版本标签
         * @example `version-demo-tmc-1.5`
         */
        PkgVersionLabel: string;
        /**
         * 部署包创建时间
         * @example `1564388159130`
         */
        CreateTime: number;
        /**
         * 应用ID
         * @example `wa-5d3eaae92977ca5251e*****`
         */
        AppId: string;
        /**
         * 部署包资源位置，用于建立部署包版本的资源。
         * @example `oss://target-url/webx/webx-quickstart-tomcat-0.1.0-SNAPSHOT.war`
         */
        PackageSource: string;
        /**
         * 部署包版本ID
         * @example `wp-5d3eab3f2977ca5251e*****`
         */
        PkgVersionId: string;
        /**
         * 部署包版本描述
         * @example `This is a package`
         */
        PkgVersionDescription: string;
    };
    /**
     * 响应代码，若成功请求为OK。
     * @example `OK`
     */
    Code: string;
}
