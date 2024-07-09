export interface GetUserApplicationsRequest {
    /**
     * 用户应用所在的命名空间（Namespace）。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 所属Region。当且仅当用户为公网地域（Region）时需要填写，默认为public。
     * @example `public`
     */
    "AhasRegionId"?: string;
}
