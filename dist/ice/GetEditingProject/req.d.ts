export interface GetEditingProjectRequest {
    /**
     * 云剪辑工程ID
     * @example `****fb2101bf24b2754cb318787dc****`
     */
    "ProjectId": string;
    /**
     * 请求来源标识
     * -OpenAPI：默认，不会做timeline转换操作。
     * -WebSDK：若传入该字段，则会自动将工程timeline转换为前端风格，并将timleine中关联素材和工程绑定，供前端websdk预览。
     * @example `WebSDK`
     */
    "RequestSource"?: string;
}
