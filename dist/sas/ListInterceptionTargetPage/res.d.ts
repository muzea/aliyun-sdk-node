export interface ListInterceptionTargetPageResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6B****`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `45`
         */
        TotalCount: number;
    };
    /**
     * 查询到的网络对象结果列表。
     */
    RuleTargetList: {
        /**
         * 指定网络对象包含的应用名称。
         * @example `frontend`
         */
        AppName: string;
        /**
         * 指定网络对象包含的镜像列表。
         */
        ImageList: string[];
        /**
         * 指定网络对象包含的标签列表。
         */
        TagList: string[];
        /**
         * 网络对象ID。
         * >您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
         * @example `400914`
         */
        TargetId: number;
        /**
         * 网络对象名称。
         * @example `destination-test-obj-Na3cF`
         */
        TargetName: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 对象类型。取值：
         * - IMAGE：镜像
         * @example `IMAGE`
         */
        TargetType: string;
        /**
         * 容器集群的ID。
         * @example `c3e2eae03eb064d2ebf940cd5e1b17****`
         */
        ClusterId: string;
        /**
         * 容器集群名称。
         * @example `sas-test-cnnf
        `
         */
        ClusterName: string;
        /**
         * 规则类型。取值：
         * - customize: 用户规则
         * @example `customize`
         */
        RuleType: string;
    }[];
}
