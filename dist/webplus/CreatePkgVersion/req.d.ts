export interface CreatePkgVersionRequest {
    /**
     * 版本标签
     * @example `version-demo-tmc-1.5`
     */
    "PkgVersionLabel"?: string;
    /**
     * 版本描述信息
     * @example `This is a package.`
     */
    "PkgVersionDescription"?: string;
    /**
     * 建立部署包版本的应用ID
     * @example `wa-5d3eaae92977ca5251e*****`
     */
    "AppId"?: string;
    /**
     * 用于建立部署包版本的资源包
     * @example `oss://target-url/webx/webx-quickstart-tomcat-0.1.0-SNAPSHOT.war`
     */
    "PackageSource"?: string;
    "RegionId"?: string;
}
