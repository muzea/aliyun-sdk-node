export interface ListInstanceResponse {
    /**
     * 请求ID。
     * @example `A2A9BA68-B264-4953-9154-CE61B1C03BA6`
     */
    RequestId: string;
    /**
     * 返回值。
     * @example `success`
     */
    Code: string;
    /**
     * 页号，默认值 1。
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功。
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小，默认值 30。
     * @example `30`
     */
    PageSize: number;
    /**
     * 返回结果数量。
     * @example `12121`
     */
    TotalCount: number;
    /**
     * 实例信息。
     */
    Instances: {
        /**
         * 最近修改时间。
         * @example `1562849760000`
         */
        ModifiedTime: string;
        /**
         * 实例名。
         * @example `test`
         */
        InstanceName: string;
        /**
         * 创建时间。
         * @example `1562849679000`
         */
        CreateTime: string;
        /**
         * 企业版规格。
         * @example `Enterprise_Basic`
         */
        InstanceSpecification: string;
        /**
         * 实例状态。
         * @example `RUNNING`
         */
        InstanceStatus: string;
        /**
         * 实例ID。
         * @example `cri-sgedpenzw80e****`
         */
        InstanceId: string;
        /**
         * 区域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 资源组ID。
         * @example `rg-aek2h3aexpy****`
         */
        ResourceGroupId: string;
        /**
         * 实例问题。
         * @example `oss bucket already exists`
         */
        InstanceIssue: string;
        Tags: {
            /**
             * 标签键
             */
            TagKey: string;
            /**
             * 标签值
             */
            TagValue: string;
        }[];
    }[];
}
