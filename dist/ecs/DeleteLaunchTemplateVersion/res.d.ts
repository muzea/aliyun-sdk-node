export interface DeleteLaunchTemplateVersionResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    LaunchTemplateVersions: {
        /**
         * 实例启动模板版本。
         */
        LaunchTemplateVersion: {
            /**
             * 实例启动模板ID。
             * @example `lt-m5eiaupmvm2op9d****`
             */
            LaunchTemplateId: string;
            /**
             * 实例启动模板版本号。
             * @example `2`
             */
            LaunchTemplateVersionNumber: number;
        }[];
    };
}
