export interface DeleteUserDefineRegionResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1234-1sda-321d-****`
     */
    RequestId: string;
    /**
     * 自定义命名空间。
     */
    RegionDefine: {
        /**
         * 隶属的地域ID。
         * @example `cn-beijing`
         */
        BelongRegion: string;
        /**
         * 命名空间名称。
         * @example `test_region`
         */
        RegionName: string;
        /**
         * 命名空间描述信息。
         * @example `logic region`
         */
        Description: string;
        /**
         * 用户主账号ID。
         * @example `11727****22398`
         */
        UserId: string;
        /**
         * 唯一标识。
         * @example `8848`
         */
        Id: number;
        /**
         * 命名空间标识，创建后不可更改。格式为`地域ID：命名空间标识符`。
         * @example `cn-beijing:test`
         */
        RegionId: string;
    };
}
