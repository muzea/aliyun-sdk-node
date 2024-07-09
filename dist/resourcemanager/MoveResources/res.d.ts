export interface MoveResourcesResponse {
    /**
     * 请求ID。
     * @example `C00B89D3-3247-11DE-95D8-A7C01FB0AB4F`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Responses: {
        /**
         * 云服务代码。
         * @example `ecs`
         */
        Service: string;
        /**
         * 资源ID。
         * @example `i-23v38****`
         */
        ResourceId: string;
        /**
         * 资源类型。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 请求ID。
         * @example `C00B89D3-3247-11DE-95D8-A7C01FB0AB4F`
         */
        RequestId: string;
        /**
         * 状态。取值：
         * - SUCCESS：成功。
         * - FAIL：失败。
         * @example `FAIL`
         */
        Status: string;
        /**
         * 错误代码。
         * > 资源转移失败时返回该参数。
         * @example `NoPermission`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * > 资源转移失败时返回该参数。
         * @example `没权限`
         */
        ErrorMsg: string;
        /**
         * 资源所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
