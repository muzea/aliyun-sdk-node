export interface DescribeCategoriesResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `6E99F8E3-7493-4ADA-A27B-2DFF2C693555`
     */
    RequestId: string;
    Categories: {
        /**
         * 平台类型查询结果
         */
        Category: {
            /**
             * 类型LOGO
             * @example `http://tomcat.apache.org/res/images/tomcat.png`
             */
            CategoryLogo: string;
            /**
             * 平台类型更新时间
             * @example `1553218065000`
             */
            UpdateTime: string;
            DemoProjects: {
                /**
                 * 样例项目
                 */
                DemoProject: {
                    /**
                     * 源码地址
                     * @example `https://github.com/aliyun/alibabacloud-webplus-demo-tomcat`
                     */
                    SourceUrl: string;
                    /**
                     * 资源包下载地址
                     * @example `http://webplus-prod-cn-shenzhen.oss-cn-shenzhen.aliyuncs.com/quickstart/java/first-step/webplus-demo-java-0.1.0-SNAPSHOT.jar`
                     */
                    PackageDownloadUrl: string;
                    /**
                     * 资源包URL地址
                     * @example `oss://webplus-prod-cn-shenzhen/quickstart/tomcat/first-step/webplus-tomcat-demo-0.1.1.war`
                     */
                    PackageUrl: string;
                    /**
                     * 环境所在地域
                     * @example `cn-shenzhen`
                     */
                    RegionId: string;
                }[];
            };
            /**
             * 平台类型创建时间
             * @example `1553218065000`
             */
            CreateTime: string;
            /**
             * 类型ID
             * @example `wca-5c937c98a9c0296d0c4823912`
             */
            CategoryId: string;
            /**
             * 类型名称
             * @example `Tomcat`
             */
            CategoryName: string;
            /**
             * 类型描述信息
             * @example `Use Tomcat as an application container, support for WAR or ZIP type application deployment packages.`
             */
            CategoryDescription: string;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
