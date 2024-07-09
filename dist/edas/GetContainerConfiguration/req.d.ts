export interface GetContainerConfigurationRequest {
    /**
     * 应用ID。
     * @example `3616cdca-4f92-**************`
     */
    "AppId": string;
    /**
     * 分组ID。
     * - 如果ID不为空，则获取应用分组的Tomcat配置。
     * - 如果ID为“”，则获取应用的Tomcat配置。
     * @example `8123db90-880f-**************`
     */
    "GroupId"?: string;
}
