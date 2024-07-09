export interface GetJvmConfigurationRequest {
    /**
     * 应用ID
     * @example `3616cdca-4f92-4***************`
     */
    "AppId": string;
    /**
     * 应用分组ID。
     * - 如果ID不为空，则获取应用分组的JVM。
     * - 如果ID为“”，则获取应用的JVM。
     * @example `8123db90-880f-48**************`
     */
    "GroupId"?: string;
}
