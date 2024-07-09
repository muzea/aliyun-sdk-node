export interface QueryEdgeInstanceResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `199BBC5D-FC99-46CB-88E2-FB98E92446FA`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `2`
         */
        PageSize: number;
        /**
         * 边缘实例数量。
         * @example `201`
         */
        Total: number;
        /**
         * 边缘实例列表。
         */
        InstanceList: {
            /**
             * 创建边缘实例的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCreateTimestamp: number;
            /**
             * 边缘实例授权类型。
             * - 0：自有实例
             * - 1：授权实例
             * @example `0`
             */
            Type: number;
            /**
             * 授权角色的全局资源描述符。
             * @example `acs:ram::1473922805******:role/aliyuniotaccessingfcrole`
             */
            RoleArn: string;
            /**
             * 角色绑定时间。
             * @example `2020-02-19 11:25:48`
             */
            RoleAttachTime: string;
            /**
             * 产品规格。
             * - 10：轻量版。
             * - 20：标准版。
             * - 30：专业版。
             * @example `30`
             */
            Spec: number;
            /**
             * 最后一次更新边缘实例的Unix时间戳。
             * @example `1581912859713`
             */
            GmtModifiedTimestamp: number;
            /**
             * 边缘实例标签。
             * @example `k1:v1,k2:v2`
             */
            Tags: string;
            /**
             * 边缘实例ID。
             * @example `9iqyQAKDb2aYGVKa****`
             */
            InstanceId: string;
            /**
             * 授权角色名称。
             * @example `AliyunIOTAccessingFCRole`
             */
            RoleName: string;
            /**
             * 角色绑定的Unix时间戳。
             * @example `1581912859713`
             */
            RoleAttachTimestamp: number;
            /**
             * 最后一次更新边缘实例的时间。
             * @example `2019-07-17 14:51:38`
             */
            GmtModified: string;
            /**
             * 边缘实例最近一次部署单类型。
             * - deploy：部署。
             * - reset：重置。
             * @example `deploy`
             */
            LatestDeploymentType: string;
            /**
             * 边缘实例最近一次部署单状态。
             * - 0：未开始（init）。
             * - 1：正在进行（processing）。
             * - 2：成功（success）。
             * - 3：失败（failure）。
             * @example `1`
             */
            LatestDeploymentStatus: number;
            /**
             * 边缘实例是否开启。
             * - true：开启。
             * - false：关闭。
             * @example `true`
             */
            BizEnable: boolean;
            /**
             * 创建边缘实例的时间。
             * @example `2019-07-17 14:34:28`
             */
            GmtCreate: string;
            /**
             * 边缘实例名称。
             * @example `test_le1`
             */
            Name: string;
        }[];
    };
}
