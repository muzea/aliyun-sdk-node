export interface ListContainerAppsResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 容器应用总数。
     * @example `1`
     */
    TotalCount: number;
    ContainerApps: {
        /**
         * 容器应用信息数组。
         */
        ContainerApps: {
            /**
             * 容器应用类型。固定值：singularity
             * @example `singularity`
             */
            Type: string;
            /**
             * 容器应用描述。
             * @example `ExampleDescription`
             */
            Description: string;
            /**
             * 创建容器应用时间。
             * @example `2018-07-18T17:46:47`
             */
            CreateTime: string;
            /**
             * 仓库名。
             * @example `busybox`
             */
            Repository: string;
            /**
             * 镜像标签。
             * @example `latest`
             */
            ImageTag: string;
            /**
             * 容器应用名称。
             * @example `ExampleName`
             */
            Name: string;
            /**
             * 容器应用ID。
             * @example `ehpc-container-ABDUGSkjs****`
             */
            Id: string;
        }[];
    };
}
