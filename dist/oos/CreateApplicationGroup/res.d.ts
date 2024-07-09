export interface CreateApplicationGroupResponse {
    /**
     * 请求ID。
     * @example `0E6BEBD3-7F9E-5878-834B-097633AB5F33`
     */
    RequestId: string;
    /**
     * 应用分组信息。
     */
    ApplicationGroup: {
        /**
         * 云监控分组ID。
         * @example `1245768`
         */
        CmsGroupId: string;
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
         * 更新时间。
         * @example `2021-09-07T10:28:25Z`
         */
        UpdateDate: string;
        /**
         * 标签键。
         * @example `k1`
         */
        ImportTagKey: string;
        /**
         * 应用名称。
         * @example `MyApplication`
         */
        ApplicationName: string;
        /**
         * 标签值。
         * @example `v1`
         */
        ImportTagValue: string;
        /**
         * 应用分组名称。
         * @example `MyApplicationGroup`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2021-09-07T10:28:25Z`
         */
        CreateDate: string;
    };
}
