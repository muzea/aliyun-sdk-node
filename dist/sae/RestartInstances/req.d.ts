export interface RestartInstancesRequest {
    /**
     * 应用ID。
     * @example `1daa7236-3844-4f36-b39a-605b0cc0****`
     */
    "AppId": string;
    /**
     * 需要重启的实例ID。多个实例时使用英文逗号（,）分隔。
     * @example `mysae-1daa7236-3844-4f36-b39a-605b0cc0caa6-*****`
     */
    "InstanceIds": string;
}
