export interface DescribeLaunchTemplatesResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE12CBA`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例启动模板总个数。
     * @example `1`
     */
    TotalCount: number;
    LaunchTemplateSets: {
        /**
         * 实例启动模板的信息集合。
         */
        LaunchTemplateSet: {
            /**
             * 模板名称。
             * @example `wd-152630748****`
             */
            LaunchTemplateName: string;
            /**
             * 模板默认版本号。
             * @example `1`
             */
            DefaultVersionNumber: number;
            /**
             * 修改时间。
             * @example `2018-05-14T14:18:00Z`
             */
            ModifiedTime: string;
            /**
             * 模板ID。
             * @example `lt-m5e3ofjr1zn1aw7q****`
             */
            LaunchTemplateId: string;
            /**
             * 实例启动模板创建时间。
             * @example `2018-05-14T14:18:00Z`
             */
            CreateTime: string;
            /**
             * 启动模板所在的企业资源组ID。
             * @example `rg-acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 模板的创建者。
             * @example `1234567890`
             */
            CreatedBy: string;
            /**
             * 模板最新版本号。
             * @example `1`
             */
            LatestVersionNumber: number;
            Tags: {
                /**
                 * 启动模板的标签对属性。
                 */
                Tag: {
                    /**
                     * 启动模板的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 启动模板的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
