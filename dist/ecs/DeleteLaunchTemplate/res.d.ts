export interface DeleteLaunchTemplateResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](~~73759~~)。
     * 使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
     * @example `lt-bp1apo0bbbkuy0rj****`
     */
    LaunchTemplateId: string;
    LaunchTemplateVersionNumbers: {
        /**
         * 删除的实例启动模板版本号集合。
         */
        versionNumbers: number[];
    };
}
