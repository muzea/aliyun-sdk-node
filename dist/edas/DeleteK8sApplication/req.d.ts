export interface DeleteK8sApplicationRequest {
    /**
     * 应用ID（查询ListApplication接口获取）。
     * @example `dbac7e3c-****-49bc-b6de-ffc550018b45`
     */
    "AppId": string;
    /**
     * 是否强制删除应用，跳过应用删除保护。
     * @example `true`
     */
    "Force"?: boolean;
}
