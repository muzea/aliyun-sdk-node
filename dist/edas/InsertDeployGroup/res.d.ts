export interface InsertDeployGroupResponse {
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
     * @example `3RD9-D3FRE****************`
     */
    RequestId: string;
    /**
     * 创建的分组信息
     */
    DeployGroupEntity: {
        /**
         * 更新时间的时间戳
         * @example `1573627695779`
         */
        UpdateTime: number;
        /**
         * 分组名称
         * @example `test`
         */
        GroupName: string;
        /**
         * 创建时间的时间戳
         * @example `1573627695779`
         */
        CreateTime: number;
        /**
         * 应用部署版本ID。
         * - 如果应用部署过，则返回一串随机数。
         * - 如果应用未部署，则返回值为空。
         * @example `****f4c50-16ee-a02b-667*****`
         */
        AppVersionId: string;
        /**
         * 应用ID
         * @example `3616cdca-4f92-4413-***********`
         */
        AppId: string;
        /**
         * 该分组部署包的版本ID。
         * - 如果该应用分组部署过应用，则返回一串随机数。
         * - 如果该应用分组未部署过应用，则返回值为空。
         * @example `****7b93-8d62-4e34***********`
         */
        PackageVersionId: string;
        /**
         * 分组类型。
         * - 0：默认分组
         * - 1：未启用灰度流量管理的分组
         * - 2：已启用灰度流程管理的分组
         * @example `1`
         */
        GroupType: number;
        /**
         * 分组ID
         * @example `577f4c50-16ee-43d8-a02b-667*********`
         */
        Id: string;
        /**
         * 集群ID
         * @example `0d247b93-8d62-4e34***********`
         */
        ClusterId: string;
    };
}
