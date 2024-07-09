export interface ListImagesResponse {
    /**
     * 返回下一页的查询凭证。
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 镜像总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 返回的最大数，取值范围：1~100。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Images: {
        /**
         * 镜像列表。
         */
        Image: {
            /**
             * 镜像状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 镜像创建时间，采用ISO 8601格式。
             * @example `2021-01-01T01:07Z`
             */
            CreationTime: string;
            /**
             * 镜像的制作进度。
             * @example `100%`
             */
            Progress: string;
            /**
             * 镜像是否已经运行在云手机实例中。取值范围：
             * - none：镜像处于闲置状态，暂无云手机实例使用。
             * - instance：镜像处于运行状态，有云手机实例使用。
             * @example `none`
             */
            Usage: string;
            /**
             * 该镜像是否已共享给其他用户。
             * @example `false`
             */
            IsSelfShared: boolean;
            /**
             * 镜像描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * 镜像的名称。
             * @example `testImageName`
             */
            ImageName: string;
            /**
             * 操作系统的英文显示名称。
             * @example `Android 9.0`
             */
            OSNameEn: string;
            /**
             * 操作系统发行版。
             * @example `Android 9.0`
             */
            Platform: string;
            /**
             * 镜像类型。
             * @example `system`
             */
            ImageCategory: string;
            /**
             * 操作系统的中文显示名称。
             * @example `Android 9.0`
             */
            OSName: string;
            /**
             * 镜像ID。
             * @example `cpm-xxxxxxxx`
             */
            ImageId: string;
            /**
             * 操作系统类型。
             * @example `android`
             */
            OSType: string;
        }[];
    };
}
