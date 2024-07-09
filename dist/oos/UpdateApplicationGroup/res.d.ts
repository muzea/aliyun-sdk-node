export interface UpdateApplicationGroupResponse {
    /**
     * 请求ID。
     * @example `AA9FA778-AE4B-55EC-81CC-C46BAF08A166`
     */
    RequestId: string;
    /**
     * 应用分组信息。
     */
    ApplicationGroup: {
        /**
         * 部署地域ID（即资源所在地域ID）。
         * @example `cn-hangzhou`
         */
        DeployRegionId: string;
        /**
         * 应用分组描述信息。
         * @example `ApplicationGroup`
         */
        Description: string;
        /**
         * 标签键。
         * @example `k1`
         */
        ImportTagKey: string;
        /**
         * 更新时间。
         * @example `2021-09-08T03:01:53Z`
         */
        UpdatedDate: string;
        /**
         * 应用名称。
         * @example `MyApplication`
         */
        ApplicationName: string;
        /**
         * 创建时间。
         * @example `2021-09-07T10:28:25Z`
         */
        CreatedDate: string;
        /**
         * 标签值。
         * @example `v1`
         */
        ImportTagValue: string;
        /**
         * 应用分组名称。
         * @example `UpdateMyApplicationGroup`
         */
        Name: string;
    };
}
