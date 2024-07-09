export interface ListHistoryDeployVersionResponse {
    /**
     * 接口状态或POP错误码
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
     * @example `D16979DC-4D42-************`
     */
    RequestId: string;
    PackageVersionList: {
        /**
         * 部署包版本列表
         */
        PackageVersion: {
            /**
             * 部署类型。
             * - url：通过JAR或WAR包部署
             * - image：通过镜像部署
             * @example `url`
             */
            Type: string;
            /**
             * 部署包的URL
             * @example `http://edas-sz.oss-cn-shenzhen**********​/SPRING_CLOUD_PROVIDER.jar`
             */
            PublicUrl: string;
            /**
             * 更新时间的时间戳
             * @example `1573627440892`
             */
            UpdateTime: number;
            /**
             * 历史版本的描述信息
             * @example `deploy`
             */
            Description: string;
            /**
             * 创建时间的时间戳
             * @example `1573627440892`
             */
            CreateTime: number;
            /**
             * 应用ID
             * @example `3616cdca-4f92-4413-****-************`
             */
            AppId: string;
            /**
             * 部署包的URL
             * @example `http://edas-sz.oss-cn-shenzhen**********​/SPRING_CLOUD_PROVIDER.jar`
             */
            WarUrl: string;
            /**
             * 历史版本的唯一标识
             * @example `441beb18-da42-44dc-****-************`
             */
            Id: string;
            /**
             * 发布版本（提供给回滚接口使用）
             * @example `1.0`
             */
            PackageVersion: string;
        }[];
    };
}
