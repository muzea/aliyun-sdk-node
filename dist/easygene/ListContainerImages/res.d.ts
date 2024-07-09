export interface ListContainerImagesResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 主机ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 翻页Token用来表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `ba6d88e2-a6f2-4d2c-a2ae-68b76b078445`
     */
    NextToken: string;
    /**
     * 分页数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 总记录数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 容器镜像列表
     */
    ContainerImages: {
        /**
         * 容器镜像命名空间名称
         * @example `samtools`
         */
        ContainerImageNamespace: string;
        /**
         * 容器镜像名称
         * @example `samtools`
         */
        ContainerImageName: string;
        /**
         * 容器镜像描述
         * @example `a suite of programs for interacting with high-throughput sequencing data.`
         */
        ContainerImageDescription: string;
        /**
         * 容器镜像版本
         */
        ContainerImageVersions: string[];
        /**
         * 容器镜像所在区域
         * @example `cn-shenzhen`
         */
        Location: string;
        /**
         * 容器镜像仓库名称
         * @example `registry-vpc.cn-shenzhen.aliyuncs.com`
         */
        ContainerRegistry: string;
        /**
         * 最后更新时间
         * @example `yyyy/MM/dd HH:mm:ss`
         */
        LastModified: string;
    }[];
}
