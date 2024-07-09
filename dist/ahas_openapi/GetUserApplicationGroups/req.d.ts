export interface GetUserApplicationGroupsRequest {
    /**
     * 应用ID。
     * @example `1234567890`
     */
    "ApplicationId": string;
    /**
     * 用户应用所在的命名空间（Namespace）。
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 所属Region。当且仅当用户为公网地域（Region）时需要填写，默认为public。
     * @example `public`
     */
    "AhasRegionId"?: string;
}
