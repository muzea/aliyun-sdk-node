export interface ListInstancesResponse {
    /**
     * 实例数组
     */
    Instances: {
        /**
         * 实例状态
         * @example `Published`
         */
        Status: string;
        /**
         * 操作人
         * @example `xxx`
         */
        ModifyUserName: string;
        /**
         * 描述
         * @example `测试的实例`
         */
        Description: string;
        /**
         * 实例可操作列表
         */
        ApplicableOperations: string[];
        /**
         * 实例id
         * @example `dc437bba-5a25-4bbc-b4c2-f268864bebb5`
         */
        InstanceId: string;
        /**
         * 名字
         * @example `测试实例`
         */
        Name: string;
        /**
         * 并发数
         * @example `10`
         */
        Concurrency: number;
        /**
         * 修改时间
         * @example `1582266750353`
         */
        ModifyTime: number;
        Numbers: string[];
        CreateTime: number;
        UnionSource: string;
        UnionInstanceId: string;
        NluServiceParamsJson: string;
    }[];
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 个数
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `A8AED3C8-F57B-5D71-9A34-4A170287533F`
     */
    RequestId: string;
    /**
     * 页号
     * @example `2`
     */
    PageNumber: number;
}
